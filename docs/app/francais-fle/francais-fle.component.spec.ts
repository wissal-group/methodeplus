import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancaisFleComponent } from './francais-fle.component';

describe('FrancaisFleComponent', () => {
  let component: FrancaisFleComponent;
  let fixture: ComponentFixture<FrancaisFleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrancaisFleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrancaisFleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
