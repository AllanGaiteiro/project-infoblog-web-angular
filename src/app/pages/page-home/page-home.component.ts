import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Section } from 'src/app/core/models/section.interface';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
  sections?: Section[];

  constructor(private sectionsService: SectionsService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.findSections();
  }

  async findSections(): Promise<void> {
    await this.sectionsService.findAll().then(res => {
      const sections = res;
      this.sections = sections;
    })
  }
}
