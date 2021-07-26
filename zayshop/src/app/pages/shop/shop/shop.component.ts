import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',

})
export class ShopComponent implements OnInit {
  private isOpen = '';
  
  toggled(event: any) {
    if (event) {
        console.log('is open');
        this.isOpen = 'is open'
    } else {
      console.log('is closed');
      this.isOpen = 'is closed'
    }
  }
  constructor(config: NgbDropdownConfig) {
  

   }

  ngOnInit(): void {
  }

}
