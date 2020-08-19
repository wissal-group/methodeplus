import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabePourAdultesComponent } from './arabe-pour-adultes.component';

describe('ArabePourAdultesComponent', () => {
  let component: ArabePourAdultesComponent;
  let fixture: ComponentFixture<ArabePourAdultesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabePourAdultesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabePourAdultesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
