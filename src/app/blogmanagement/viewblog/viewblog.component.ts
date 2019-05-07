import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css'],
  providers:[Location]
})
export class ViewblogComponent implements OnInit {

  public currentBlog:any
  blogid=this._route.snapshot.paramMap.get('blogId')
  constructor(private location:Location,public http:HttpClient,private blogservice:BlogService,private router:Router,private _route:ActivatedRoute,private toastr:ToastrService) { }
  ngOnInit() {
  let blogid=this._route.snapshot.paramMap.get('blogId')
    this.blogservice.getSingleBlog(blogid).subscribe(
      response=>{
        console.log(response)
    this.currentBlog=response['data']
      },
      error=>{
        console.log(error)
      }
    )
  }
  goBackToPreviousPage=()=>{
    this.location.back()
  }
   deleteThisBlog=()=>{
    this.blogservice.deleteBlog(this.blogid).subscribe(
      response=>{
        console.log(response)
        this.toastr.success('Blog Deleted Successfully')
        this.router.navigate(['/all'])
      },
      error=>{
        console.log(error)
      }
    )
  }
}
