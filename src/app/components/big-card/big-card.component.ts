import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() post?: Post;
  id: string = 'id';
}
