import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdivideoComponent } from './gdivideo.component';

describe('GdivideoComponent', () => {
  let component: GdivideoComponent;
  let fixture: ComponentFixture<GdivideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdivideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdivideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
