import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent {
  text?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.text = params['text'];
    });
  }
}
