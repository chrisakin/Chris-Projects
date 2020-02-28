import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-menu-section',
  templateUrl: './auth-menu-section.component.html',
  styleUrls: ['./auth-menu-section.component.css']
})
export class AuthMenuSectionComponent implements OnInit {
  page = document.location.pathname.substring(1);

  constructor() { }

  ngOnInit() {
  }

}
