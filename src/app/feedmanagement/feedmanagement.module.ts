import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'feed',component:FeedComponent}
      ]
    )
  ]
})
export class FeedmanagementModule { }
