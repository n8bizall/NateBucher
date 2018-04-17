import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebimComponent } from './webim.component';

describe('WebimComponent', () => {
  let component: WebimComponent;
  let fixture: ComponentFixture<WebimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
