import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyfts',
  templateUrl: './lyfts.component.html',
  styleUrls: ['./lyfts.component.css']
})
export class LyftsComponent implements OnInit {
  pages = [
    'lyfts',
    'lyft',
    'lyftProfile'
  ];

  pagesState: any = this.pages.reduce((acc, elem) => {
    acc[elem] = true;

    return acc;
  }, {});

  name: String;

  car: String;

  userData = {
    'zenith': {
      name: 'Akintade Katherine',
      car: 'Tesla Model Y'
    }, 'ekene': {
      name: 'Akintade Sharon',
      car: 'Lamborghini Mercy'
    }
  };

  constructor() {
    this.pagesState[this.pages[0]] = false;
  }

  ngOnInit() {
  }

  onNextClick(event: any) {
    event.preventDefault();

    const currentPage = event.target.getAttribute('data-current');
    const nextPage = event.target.getAttribute('data-next');
    const user = event.target.getAttribute('data-user');

    if (user) {
      this.name = this.userData[user].name;
      this.car = this.userData[user].car;
    }

    this.pagesState[currentPage] = true;
    this.pagesState[nextPage] = false;
  }
}
