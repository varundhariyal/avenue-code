import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpParams } from "@angular/common/http";
import { Observable } from  "rxjs";
import{ catchError,tap } from 'rxjs/operators'
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl=`http://blog.roadtoavenue.ga/api/v1/blogs/`

  constructor(private http:HttpClient) { }
   //method to get all blogs
getAllBlogs=()=>{
  let response=this.http.get(`${this.baseUrl}all`)
  return response;
}
//method to get/view single blog
getSingleBlog=(blogid)=>{
  let response=this.http.get(`${this.baseUrl}view/${blogid}`)
  return response
}
//method to create blog which pass http param and return observable
 public createBlog(blogData): Observable<any>{
 const param=new HttpParams()
 .set('title',blogData.title)
 .set('category',blogData.category)
 .set('description',blogData.description)
 .set('blogBody',blogData.blogBody) 
 .set('author',blogData.author)
 return this.http.post(`${this.baseUrl}create`,param)
 }
//method to edit the blog
editBlog=(blogId,blogData)=>{
let myResponse=this.http.put(`${this.baseUrl}${blogId}/edit`,blogData)
return myResponse
}
//method to delete blog
deleteBlog=(blogId)=>{
  let data=[]
  let myReponse=this.http.post(`${this.baseUrl}${blogId}/delete`,data)
  return myReponse; 
}
}
