import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
 images=[

 {img:"assets/img/brand_01.png"},
{img:"assets/img/brand_02.png"},
{img:"assets/img/brand_03.png"},
{img:"assets/img/brand_04.png"},
 ];
 
 responsiveOptions:any;
  constructor(private  config: NgbCarouselConfig) {
     
  }

  ngOnInit(): void {}
}
