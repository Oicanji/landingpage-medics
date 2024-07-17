import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOutdoorComponent } from './text-outdoor.component';

describe('TextOutdoorComponent', () => {
  let component: TextOutdoorComponent;
  let fixture: ComponentFixture<TextOutdoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextOutdoorComponent]
    });
    fixture = TestBed.createComponent(TextOutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
