import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricityPageComponent } from './electricity-page/electricity-page.component';
import { ProgrammingPageComponent } from './programming-page/programming-page.component';
import { SecurityPageComponent } from './security-page/security-page.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'programmingPage',
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
  {
    path: 'whoAmI',
    component: WhoAmIComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
