import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursCoranComponent } from './cours-coran.component';

describe('CoursCoranComponent', () => {
  let component: CoursCoranComponent;
  let fixture: ComponentFixture<CoursCoranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursCoranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursCoranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
