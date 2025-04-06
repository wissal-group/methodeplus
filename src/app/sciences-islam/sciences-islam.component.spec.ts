import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencesIslamComponent } from './sciences-islam.component';

describe('SciencesIslamComponent', () => {
  let component: SciencesIslamComponent;
  let fixture: ComponentFixture<SciencesIslamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciencesIslamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencesIslamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
