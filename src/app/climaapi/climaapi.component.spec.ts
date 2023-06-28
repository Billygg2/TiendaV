import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaapiComponent } from './climaapi.component';

describe('ClimaapiComponent', () => {
  let component: ClimaapiComponent;
  let fixture: ComponentFixture<ClimaapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClimaapiComponent]
    });
    fixture = TestBed.createComponent(ClimaapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
