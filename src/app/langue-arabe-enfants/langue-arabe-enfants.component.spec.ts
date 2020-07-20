import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangueArabeEnfantsComponent } from './langue-arabe-enfants.component';

describe('LangueArabeEnfantsComponent', () => {
  let component: LangueArabeEnfantsComponent;
  let fixture: ComponentFixture<LangueArabeEnfantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangueArabeEnfantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangueArabeEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
