# First stage
FROM node:19-alpine3.16 as build
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install && npm run ng build

# Second stage
FROM nginx:1.23.3-alpine
# Set the workin directory for my project
WORKDIR /usr/share/nginx/html
# remove the default nginx static files
RUN rm -rf ./*
# add nginx.conf to files
COPY /nginxconf/nginx.conf /etc/nginx/
# copy the static content formt he builder stage
COPY --from=build /app/dist/front-cameras-electricity .
#exposing port 8080 for usage
EXPOSE 8080
# Container run the nginx with global directive and daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

# # Imagen base de Node.js
# FROM node:lts-alpine

# # Directorio de trabajo
# WORKDIR /app

# # Copiar package.json y package-lock.json al directorio de trabajo
# COPY package*.json ./

# # Instalar dependencias
# RUN npm ci

# # Copiar el resto de los archivos del proyecto al directorio de trabajo
# COPY . .

# # Construir el proyecto Angular
# RUN npm run build

# # Exponer el puerto en el que se ejecutará la aplicación
# EXPOSE 8080

# # Instalar el servidor HTTP de Angular
# RUN npm install -g @angular/cli@15.0.3

# # Iniciar el servidor HTTP de Angular
# CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "8080", "--disable-host-check"]
