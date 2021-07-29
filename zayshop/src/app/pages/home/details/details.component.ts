import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../models/IPost.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  @Input() item: IPost;
  constructor() {}

  ngOnInit(): void {}
}
