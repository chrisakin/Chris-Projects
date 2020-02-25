import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team3 } from '../team3';


@Component({
  selector: 'app-details3',
  templateUrl: './details3.component.html',
  styleUrls: ['./details3.component.css']
})
export class Details3Component implements OnInit {
  
details3 = { id: null, name: '',    image: '', location: '', stadium:    '', capacity:    null, manager: '', captain: '', lat: null, lng: null };
teams = Team3;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== 'null') {
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.details3 = this.teams.find(x => x.id === id);
    }
  }

  showMap(lat: any, lng: any) {
    this.router.navigate(['/maps', lat, lng]);
  }
}
