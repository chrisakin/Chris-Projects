import { Component, OnInit } from '@angular/core';
import { SoccerDataService} from '../soccer-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sports;

  constructor(private soccerdataService: SoccerDataService) { }

  ngOnInit()  {
    this.sports = this.soccerdataService.getSports
    
  }

}
