import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerDynTxt: String = '';
  dynTxtArray = ['Save time', 'Save money', 'Save gas', 'Lagos with less traffic'];
  dynTxtArrayLen: Number = this.dynTxtArray.length;
  dynTxtArrayCurIdx: Number = 0;

  constructor() { }

  ngOnInit() {
    (function _() {
      if (this.dynTxtArrayCurIdx === this.dynTxtArrayLen) {
        this.dynTxtArrayCurIdx = 0;
      }

      this.bannerDynTxt = this.dynTxtArray[this.dynTxtArrayCurIdx];

      this.dynTxtArrayCurIdx += 1;

      window.setTimeout(_.bind(this), 2000);
    }.bind(this))();
  }

}
