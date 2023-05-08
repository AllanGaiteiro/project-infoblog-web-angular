import { Injectable } from '@angular/core';
import { Section, SectionID } from '../core/models/section.interface';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  // TODO: se necessario mover para um banco de dados
  sectionsList: Section[] = [
    { id: SectionID.UI_DESIGN, name: 'UI Design' },
    { id: SectionID.FRONT_END, name: 'Front-end' },
    { id: SectionID.BACK_END, name: 'Back-end' }
  ]
  constructor() { }

  findAll(): Promise<Section[]> {
    return new Promise<Section[]>((resolve, reject) => {
      resolve(this.sectionsList)
    })
  }
}
