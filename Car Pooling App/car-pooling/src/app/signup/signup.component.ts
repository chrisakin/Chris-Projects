import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormPagesState} from '../form-pages-state';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formPages = [
    'showNamePhone',
    'showOtp',
    'showProfilePicture',
    'showDriverRegister',
    'showConfirmDetails',
    'showSuccess'
  ];

  formPagesLen = this.formPages.length;

  curFormPage = 0;

  formPagesState: any = this.formPages.reduce((acc, elem) => {
    acc[elem] = true;

    return acc;
  }, {});

  signupForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    otp: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    this.formPagesState[this.formPages[0]] = false;
  }

  onNextClick() {
    this.formPagesState[this.formPages[this.curFormPage]] = true;

    if (this.curFormPage < this.formPagesLen) {
      this.curFormPage += 1;
    } else {
      this.curFormPage = 0;
    }

    this.formPagesState[this.formPages[this.curFormPage]] = false;
  }

  onPrevClick() {
    this.formPagesState[this.formPages[this.curFormPage]] = true;

    if (this.curFormPage > 0) {
      this.curFormPage -= 1;
    } else {
      this.curFormPage = this.formPagesLen - 1;
    }

    this.formPagesState[this.formPages[this.curFormPage]] = false;
  }

  takePhoto() {
    // Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: 1280, height: 720 } }; 

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
  }
}
