import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursIslamComponent } from './cours-islam.component';

describe('CoursIslamComponent', () => {
  let component: CoursIslamComponent;
  let fixture: ComponentFixture<CoursIslamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursIslamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursIslamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
