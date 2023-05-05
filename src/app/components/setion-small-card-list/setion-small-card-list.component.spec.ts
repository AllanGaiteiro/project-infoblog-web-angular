import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionSmallCardListComponent } from './setion-small-card-list.component';

describe('SetionSmallCardListComponent', () => {
  let component: SetionSmallCardListComponent;
  let fixture: ComponentFixture<SetionSmallCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetionSmallCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetionSmallCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
