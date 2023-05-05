import { Component } from '@angular/core';
import { Section } from 'src/app/core/models/section.interface';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuList?: Section[];

  constructor(private sectionService: SectionsService) {

  }

  ngOnInit() {
    this.findMenuList();
  }


  findMenuList() {
    this.sectionService.findAll().then(res => {
      this.menuList = res;
    })
  }
}
