import { Component, OnInit } from '@angular/core';
import PostsServiceService from '../shared/posts-service.service';
import { map, Observable } from 'rxjs';
import Post from '../shared/Post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  PostsService!: Observable<Post[]>

  constructor(private PostsServiceService: PostsServiceService ) { }

  ngOnInit(): void {

    this.PostsService = this.PostsServiceService.getPosts();

    
  }

}
