import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post.interface';
import { ContentFormatPipe } from './contentformat.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [ContentFormatPipe]
})
export class CardComponent {
  @Input() post?: Post;
}
