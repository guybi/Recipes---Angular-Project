import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnderstandingObservablesComponent } from './anderstanding-observables.component';

describe('AnderstandingObservablesComponent', () => {
  let component: AnderstandingObservablesComponent;
  let fixture: ComponentFixture<AnderstandingObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnderstandingObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnderstandingObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
