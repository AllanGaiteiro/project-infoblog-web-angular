import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.css']
})
export class SearchInfoComponent {
  @Input() search?: string;
  @Input() havePost: boolean = false;
}
