import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDestaquesComponent } from './section-destaques.component';

describe('SectionDestaquesComponent', () => {
  let component: SectionDestaquesComponent;
  let fixture: ComponentFixture<SectionDestaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDestaquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
