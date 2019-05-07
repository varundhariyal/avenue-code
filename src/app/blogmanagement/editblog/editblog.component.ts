import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  public currentBlog
  public publishedCategory = ['Action', 'Drama', 'Tech','Sci-Fi','Genuine','Comedy']
  
  constructor(private blogservice:BlogService,private _route:ActivatedRoute,private route:Router,private toastr:ToastrService) { }

  ngOnInit() {
    let blogId=this._route.snapshot.paramMap.get('blogId')
    this.blogservice.getSingleBlog(blogId).subscribe(
       response=>{
        this.currentBlog=response['data']
      }
    )
  }
  editThisBlog=()=>{
    this.blogservice.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      response=>{
        console.log(response)
        this.toastr.success('Blog Edited Successfully')
        this.route.navigate(['/view',this.currentBlog.blogId])
      }
    )
  }

}
