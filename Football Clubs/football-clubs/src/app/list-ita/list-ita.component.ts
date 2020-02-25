import { Component, OnInit } from '@angular/core';
import { Team2 } from '../team2';

@Component({
  selector: 'app-list-ita',
  templateUrl: './list-ita.component.html',
  styleUrls: ['./list-ita.component.css']
})
export class ListItaComponent implements OnInit {

  teams = Team2;
  
  constructor() { }

  ngOnInit(): void {
  }

}
