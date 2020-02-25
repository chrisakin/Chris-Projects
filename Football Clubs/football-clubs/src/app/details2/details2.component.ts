
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team2 } from '../team2';


@Component({
  selector: 'app-details2',
  templateUrl: './details2.component.html',
  styleUrls: ['./details2.component.css']
})
export class Details2Component implements OnInit {
  
details2 = { id: null, name: '',    image: '', location: '', stadium:    '', capacity:    null, manager: '', captain: '', lat: null, lng: null };
teams = Team2;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== 'null') {
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.details2 = this.teams.find(x => x.id === id);
    }
  }

  showMap(lat: any, lng: any) {
    this.router.navigate(['/maps', lat, lng]);
  }
}
