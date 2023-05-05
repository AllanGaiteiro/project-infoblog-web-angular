import { Component } from '@angular/core';
import { Section } from 'src/app/core/models/section.interface';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
  sections?: Section[];

  constructor(private sectionsService: SectionsService) {

  }
  ngOnInit() {
    this.findSections();
  }

  findSections() {
    this.sectionsService.findAll().then(res => {
      this.sections = res;
    })
  }
}
