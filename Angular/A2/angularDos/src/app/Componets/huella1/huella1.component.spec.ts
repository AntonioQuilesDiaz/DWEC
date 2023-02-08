import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Huella1Component } from './huella1.component';

describe('Huella1Component', () => {
  let component: Huella1Component;
  let fixture: ComponentFixture<Huella1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Huella1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Huella1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
