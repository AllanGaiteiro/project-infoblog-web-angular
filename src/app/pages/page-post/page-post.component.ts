import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.css']
})
export class PagePostComponent {
  text?: string;
  post: any;
  postsSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.text = params['id'];
    });
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  findPost(id: string) {
    this.postsSubscription = this.service.findById(id).subscribe(data => {
      this.post = data;
    })
  }
}
