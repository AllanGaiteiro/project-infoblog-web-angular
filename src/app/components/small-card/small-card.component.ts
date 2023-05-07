import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() post?: Post;
}
