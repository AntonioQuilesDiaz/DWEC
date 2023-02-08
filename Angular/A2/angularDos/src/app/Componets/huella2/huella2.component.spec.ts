import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Huella2Component } from './huella2.component';

describe('Huella2Component', () => {
  let component: Huella2Component;
  let fixture: ComponentFixture<Huella2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Huella2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Huella2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
