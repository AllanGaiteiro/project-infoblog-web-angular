import { Component, Input } from '@angular/core';
import { Section } from 'src/app/core/models/section.interface';

@Component({
  selector: 'app-setion-small-card-list',
  templateUrl: './setion-small-card-list.component.html',
  styleUrls: ['./setion-small-card-list.component.css']
})
export class SetionSmallCardListComponent {
  @Input() section?: Section;
}
