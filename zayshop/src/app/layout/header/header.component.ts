import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {

  constructor() { }
  isOpen=false;
  collapse(){

    return this.isOpen=!this.isOpen;
 }
  ngOnInit(): void {
  }

}
