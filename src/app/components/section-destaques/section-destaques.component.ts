import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/post.interface';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-section-destaques',
  templateUrl: './section-destaques.component.html',
  styleUrls: ['./section-destaques.component.css']
})
export class SectionDestaquesComponent {
  posts?: Post[];
  postsSubscription?: Subscription;
  constructor(private service: PostService) {

  }

  ngOnInit(): void {
    this.findPosts();
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  findPosts(): void {
    this.postsSubscription = this.service.findMoreViews(4).subscribe(data => {
      this.posts = data;
    })
  }
}
