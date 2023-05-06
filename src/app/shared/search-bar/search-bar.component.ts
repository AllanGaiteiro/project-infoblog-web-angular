import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  text?: string;
  constructor(private router: Router) { }

  goToSearchPage() {
    this.router.navigate(['/search', this.text]);
  }

}
