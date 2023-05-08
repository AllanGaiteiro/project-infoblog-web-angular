import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/post.interface';
import { SectionID } from 'src/app/core/models/section.interface';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent {
  text?: string;
  posts?: Post[];
  postSubscription?: Subscription;
  istag?: string;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.text = params['text'];

      if (!this.text) {
        return;
      } else if (
        SectionID.UI_DESIGN === this.text ||
        SectionID.BACK_END === this.text ||
        SectionID.FRONT_END === this.text
      ) {
        this.findPostsByTag(this.text)
      } else {
        this.findPosts(this.text)
      }
    });
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  findPosts(text: string) {
    this.postSubscription = this.postService.search(text).subscribe(posts => {
      this.posts = posts;
    });
  }

  findPostsByTag(text: string) {
    this.postSubscription = this.postService.findBySection(text).subscribe(posts => {
      this.posts = posts;
    });
  }


}
