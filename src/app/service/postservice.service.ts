import { Injectable } from '@angular/core';
import { Post } from '../posts/post.model';
import { Subject } from 'rxjs';
import { HttpClient }  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {
 private posts : Post[] = [];
 private postUpdated = new Subject<Post[]>();


  constructor(private http:HttpClient) { }

  getPostUpdatedLister(){
    return this.postUpdated.asObservable();
  }

  addPost(title:string, content:string){
    const post :Post = {id:null, title:title, content:content};
    this.http.post<{message:string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData)=>{
      console.log(responseData.message);
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
    })
  }

  getPosts(){
    this.http.get<{message:string, posts :Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData)=>{
      this.posts = postData.posts;
      this.postUpdated.next([...this.posts]);
    })
    return [...this.posts];
  }
}
