import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgEmogiTristeComponent } from './svg-emogi-triste.component';

describe('SvgEmogiTristeComponent', () => {
  let component: SvgEmogiTristeComponent;
  let fixture: ComponentFixture<SvgEmogiTristeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgEmogiTristeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgEmogiTristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
