import { Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'portfolio_v2';

  constructor(){}

  numSlides = 0
  coordinates = 0;

  widthImgs = 0;
  imgNum = 0;

  ngOnInit(): void {

    document.addEventListener('DOMContentLoaded', () => {
      const elements = document.querySelectorAll('.slider-section');
      this.widthImgs = 100 / elements.length;
      this.imgNum = elements.length;
      setInterval(() => this.moveToRight(), 3000);
    });
  }

  ngAfterViewInit(): void {
    
  }

  moveToRight(){

    let slider: any = document.querySelector('#slider');
    let limit = -1*((100 / this.imgNum) *(this.imgNum-1));

    if(Math.round(this.coordinates) > Math.round(limit)){
      this.coordinates -= this.widthImgs;
    } else {
      this.coordinates = 0;
    }
    slider.style.transform = 'translate('+this.coordinates.toString()+'%)';
    slider.style.transition = '.5s ease';
  }

  moveToLeft(){
    let slider: any = document.querySelector('#slider');
    let limit = -1*((100 / this.imgNum) *(this.imgNum-1));

    if(this.coordinates < 0){
      this.coordinates += this.widthImgs;
    } else {
      this.coordinates = limit
    }
    slider.style.transform = 'translate('+this.coordinates.toString()+'%)'
    slider.style.transition = '.5s ease';
  }


}
