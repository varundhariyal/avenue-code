import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllblogComponent } from './allblog.component';

describe('AllblogComponent', () => {
  let component: AllblogComponent;
  let fixture: ComponentFixture<AllblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
