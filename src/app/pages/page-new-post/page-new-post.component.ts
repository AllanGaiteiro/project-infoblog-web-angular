import { Component } from '@angular/core';
import { Post } from 'src/app/core/models/post.interface';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  templateUrl: './page-new-post.component.html',
  styleUrls: ['./page-new-post.component.css']
})
export class PageNewPostComponent {

  constructor(private postService: PostService) {
  }

  async ngOnInit(): Promise<void> {
  }

  async createPost(post: Post): Promise<void> {
    await this.postService.create(post)
  }
}
