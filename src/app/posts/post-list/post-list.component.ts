import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from 'src/app/service/postservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  posts:Post[] = [];
  private postSub:Subscription;


  constructor(public postService:PostService) { }
  ngOnInit(){
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdatedLister().subscribe((posts:Post[]) =>{
      this.posts = posts;
    })
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
