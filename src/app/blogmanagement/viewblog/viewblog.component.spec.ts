import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewblogComponent } from './viewblog.component';

describe('ViewblogComponent', () => {
  let component: ViewblogComponent;
  let fixture: ComponentFixture<ViewblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
