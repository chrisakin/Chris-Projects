import { Component, OnInit } from '@angular/core';
import { Team3 } from '../team3';

@Component({
  selector: 'app-list-spa',
  templateUrl: './list-spa.component.html',
  styleUrls: ['./list-spa.component.css']
})
export class ListSpaComponent implements OnInit {

  teams = Team3;
  
  constructor() { }

  ngOnInit(): void {
  }

}
