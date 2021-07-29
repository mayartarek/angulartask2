import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsResolver } from './resolvers/posts.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      posts: PostsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
