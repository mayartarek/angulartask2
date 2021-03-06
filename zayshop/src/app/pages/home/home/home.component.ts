import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { IPost } from '../models/IPost.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [NgbRatingConfig],
})
export class HomeComponent implements OnInit {
  shoppingItem = [
    {
      image: 'assets/img/category_img_01.jpg',
      title: 'Watches',
    },
    {
      image: 'assets/img/category_img_02.jpg',
      title: 'Shoes',
    },
    {
      image: 'assets/img/category_img_03.jpg',
      title: 'Accessories',
    },
  ];

  // products = [
  //   {
  //     image: 'assets/img/feature_prod_01.jpg',
  //     title: 'Gym Weight',
  //     price: '$20.1',
  //     description:
  //       'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
  //     reviews: 'Reviews (36)',
  //     rate: 4,
  //   },
  //   {
  //     image: 'assets/img/feature_prod_02.jpg',
  //     title: 'Cloud Nike Shoes',
  //     price: '$20.1',
  //     description:
  //       'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
  //     reviews: 'Reviews (24)',
  //     rate: 5,
  //   },
  //   {
  //     image: 'assets/img/feature_prod_03.jpg',
  //     title: 'Summer Addides Shoes',
  //     price: '$20.1',
  //     description:
  //       'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
  //     reviews: 'Reviews (50)',
  //     rate: 3,
  //   },
  // ];

  posts: IPost[] = [];
  // rate: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data
      .pipe(
        tap((res: any) => {
          console.log(res.posts);
          this.posts = res.posts;
          // this.rate = res.posts.id;
        })
      )
      .toPromise();
  }
}
