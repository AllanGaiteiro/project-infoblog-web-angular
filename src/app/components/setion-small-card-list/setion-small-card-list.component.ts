import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/post.interface';
import { Section } from 'src/app/core/models/section.interface';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-setion-small-card-list',
  templateUrl: './setion-small-card-list.component.html',
  styleUrls: ['./setion-small-card-list.component.css']
})
export class SetionSmallCardListComponent {
  @Input() section?: Section;
  posts?: Post[];
  postsSubscription?: Subscription;

  constructor(private service: PostService) {
  }
  ngOnInit(): void {
    this.findPosts();
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe()
    }
  }

  findPosts() {
    if (this.section) {
      this.postsSubscription = this.service.findBySection(this.section.id, 5).subscribe(res => {
        this.posts = res;
      });
    }

  }
}
