import { Injectable } from '@angular/core';
import { Section } from '../core/models/section.interface';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  // TODO: se necessario mover para um banco de dados
  sectionsList: Section[] = [
    { id: 'ui-design', name: 'UI Design' },
    { id: 'front-end', name: 'Front-end' },
    { id: 'back-end', name: 'Back-end' }
  ]
  constructor() { }

  findAll(): Promise<Section[]> {
    return new Promise<Section[]>((resolve, reject) => {
      resolve(this.sectionsList)
    })
  }
}
