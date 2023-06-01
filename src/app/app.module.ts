import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { ElectricityPageComponent } from './electricity-page/electricity-page.component';
import { SecurityPageComponent } from './security-page/security-page.component';
import { ProgrammingPageComponent } from './programming-page/programming-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    ElectricityPageComponent,
    SecurityPageComponent,
    ProgrammingPageComponent,
    FooterPageComponent,
    WhoAmIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
