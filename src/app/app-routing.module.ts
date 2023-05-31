import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricityPageComponent } from './electricity-page/electricity-page.component';
import { ProgrammingPageComponent } from './programming-page/programming-page.component';
import { SecurityPageComponent } from './security-page/security-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'electricityPage',
    pathMatch: 'full'
  },
  {
    path: 'electricityPage',
    component: ElectricityPageComponent
  },
  {
    path: 'securityPage',
    component: SecurityPageComponent
  },
  {
    path: 'programmingPage',
    component: ProgrammingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
