import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  side = 'front';
  slide1: any;
  slide2: any;
  pictures = ['url("/assets/backCool.jpeg")', 'url("/assets/backCool.jpeg")', 'url("/assets/backCool.jpeg")'];
  constructor() {}
  ngOnInit(): void {
    this.slide1 = document.getElementById('slide1');
    this.slide2 = document.getElementById('slide2');
    this.Repeat();
  }
  runMe() {
    let i = 0;
    for (const pic of this.pictures) {
      const ret = document.getElementById('backg' + i);
      ret.style.background = pic;
      console.log(ret)
      i++;
    }
  }
  Repeat() {
    setTimeout(() => {
      this.functionSlide();
      this.Repeat();

    }, 6000);
  }
  functionSlide(){
    if (this.side === 'front') {
      this.slide1.classList.add('back');
      this.slide1.classList.remove('front');
      this.slide2.classList.remove('back');
      this.slide2.classList.add('front');
      this.side = 'back';
    } else {
      this.slide1.classList.add('front');
      this.slide1.classList.remove('back');
      this.slide2.classList.remove('front');
      this.slide2.classList.add('back');
      this.side = 'front';

    }
  }
  pageNotAvailable(){
    alert('page not available yet')
  }
  myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  linkUp() {
    const win = window.open('https://s3.eu-central-1.amazonaws.com/eu-cslide-prod-recordings/aids2020/597/AIDS2020_session597_fullvideo.mp4.mp4', '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
  }
}
