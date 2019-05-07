import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { AllblogComponent } from './allblog/allblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { BlogService } from '../blog.service';

@NgModule({
  declarations: [BlogComponent, ViewblogComponent, AllblogComponent, EditblogComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [
        {path:'create',component:BlogComponent},
        {path:'all',component:AllblogComponent},
        {path:'edit/:blogId',component:EditblogComponent},
        {path:'view/:blogId',component:ViewblogComponent}
      ]
    )
  ],
  providers:[BlogService]
})
export class BlogmanagementModule { }
