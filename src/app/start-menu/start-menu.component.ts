import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent {
  constructor(
    private router: Router
  ) { }

  goToElectricityPage() {
    this.router.navigate(['electricityPage']);

  }
  goToSecurityPage() {
    this.router.navigate(['securityPage']);

  }
  goToProgrammingPage() {
    this.router.navigate(['programmingPage']);
  }

  urlTestPage() {
    this.router.navigate(['urlTest'])
  }

}
