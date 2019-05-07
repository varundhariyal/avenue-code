import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  public blogTitle: any
  public blogBodyHtml: any
  public blogDescription: any
  public blogCategory: any
  public author:any
  public publishedCategory = ['Action', 'Drama', 'Tech','Sci-Fi','Genuine','Comedy']
  constructor(private blogService: BlogService,private route:Router,private toastr:ToastrService) { }

  ngOnInit() {
  }
  public createBlog():any {
    let blogData = {
      title: this.blogTitle,
      category: this.blogCategory,
      bodyBody: this.blogBodyHtml,
      description: this.blogDescription,
      author:this.author
    }
    this.blogService.createBlog(blogData).subscribe(

      response => {
        console.log(response)
        this.toastr.success('Blog Created Successfully')
      this.route.navigate(['/view',response.data.blogId])
      },
      error=>{
        this.toastr.error('Error Creating blog')
        console.log(error)
      }

    )
  }

}
