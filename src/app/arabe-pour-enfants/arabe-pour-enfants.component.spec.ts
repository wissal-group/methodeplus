import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabePourEnfantsComponent } from './arabe-pour-enfants.component';

describe('ArabePourEnfantsComponent', () => {
  let component: ArabePourEnfantsComponent;
  let fixture: ComponentFixture<ArabePourEnfantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabePourEnfantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabePourEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
