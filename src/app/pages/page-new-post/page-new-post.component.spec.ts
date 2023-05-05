import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewPostComponent } from './page-new-post.component';

describe('PageNewPostComponent', () => {
  let component: PageNewPostComponent;
  let fixture: ComponentFixture<PageNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNewPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
