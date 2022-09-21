import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { PostService } from '../service/postservice.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  constructor(public postService:PostService) { }
  ngOnInit() {}

  savePost(form:NgForm){
    if(form.invalid)
    { 
      return; 
    }
  this.postService.addPost(form.value.title, form.value.content);
  form.reset();
  }
}