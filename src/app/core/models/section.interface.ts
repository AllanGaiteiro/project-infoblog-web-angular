export enum SectionID {
  UI_DESIGN = 'ui-design',
  FRONT_END = 'front-end',
  BACK_END = 'back-end',
}

export interface Section {
  id: SectionID;
  name: string;
}

