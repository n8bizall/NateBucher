import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemComponent } from './cem.component';

describe('CemComponent', () => {
  let component: CemComponent;
  let fixture: ComponentFixture<CemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
