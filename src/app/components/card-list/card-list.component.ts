import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() posts?: Post[];


}
