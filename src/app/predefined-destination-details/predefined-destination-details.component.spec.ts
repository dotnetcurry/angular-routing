import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedDestinationDetailsComponent } from './predefined-destination-details.component';

describe('PredefinedDestinationDetailsComponent', () => {
  let component: PredefinedDestinationDetailsComponent;
  let fixture: ComponentFixture<PredefinedDestinationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinedDestinationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedDestinationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
