import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdiwebsiteComponent } from './gdiwebsite.component';

describe('GdiwebsiteComponent', () => {
  let component: GdiwebsiteComponent;
  let fixture: ComponentFixture<GdiwebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdiwebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdiwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
