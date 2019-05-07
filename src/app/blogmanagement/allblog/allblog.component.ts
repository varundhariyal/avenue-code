import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allblog',
  templateUrl: './allblog.component.html',
  styleUrls: ['./allblog.component.css']
})
export class AllblogComponent implements OnInit {
  public allBlogs:any
  constructor(private blogService:BlogService,private http:HttpClient) { }

  ngOnInit() {
   this.allBlogs=this.blogService.getAllBlogs().subscribe(
      response=>{
        console.log(response)
        this.allBlogs=response['data']       
      },
      error=>{
        console.log(error)
      }
    )
  }
 
}
