import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsResolver } from './resolvers/posts.resolver';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [SharedModule, HomeRoutingModule, NgbModule],
  providers: [PostsResolver],
  entryComponents: [DetailsComponent],
})
export class HomeModule {}
