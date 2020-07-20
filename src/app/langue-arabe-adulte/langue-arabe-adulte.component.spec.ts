import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangueArabeAdulteComponent } from './langue-arabe-adulte.component';

describe('LangueArabeAdulteComponent', () => {
  let component: LangueArabeAdulteComponent;
  let fixture: ComponentFixture<LangueArabeAdulteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangueArabeAdulteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangueArabeAdulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
