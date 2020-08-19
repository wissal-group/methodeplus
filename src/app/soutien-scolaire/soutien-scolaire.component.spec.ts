import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutienScolaireComponent } from './soutien-scolaire.component';

describe('SoutienScolaireComponent', () => {
  let component: SoutienScolaireComponent;
  let fixture: ComponentFixture<SoutienScolaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoutienScolaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutienScolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
