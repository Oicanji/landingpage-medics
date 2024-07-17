import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbrInputComponent } from './gbr-input.component';

describe('GbrInputComponent', () => {
  let component: GbrInputComponent;
  let fixture: ComponentFixture<GbrInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GbrInputComponent]
    });
    fixture = TestBed.createComponent(GbrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
