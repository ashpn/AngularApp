import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private keyclockService: KeycloakService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.keyclockService.logout();
  }

}
