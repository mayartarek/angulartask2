import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig, NgbPanelChangeEvent, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  providers: [NgbRatingConfig],
})
export class ShopComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  accordion=[
    {id:1,
      title:"Gender",
      cat:["Men",
      "Women"]
    },
    {id:2,
      title:"Sale",
      cat:["Sport","Luxury"
          ]    },
    {id:3,
      title:"product",
      cat:["Bag",
      "Sweather"
      ,"Sunglass"]
    }
  ]
  products=[
    "assets/img/shop_01.jpg",
    "assets/img/shop_03.jpg",
    "assets/img/shop_02.jpg",
    "assets/img/shop_04.jpg",
  ]

  filters=[
    "ALL","Men", "Women"
  ]
}
