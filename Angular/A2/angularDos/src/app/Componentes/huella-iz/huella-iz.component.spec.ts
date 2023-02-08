import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuellaIZComponent } from './huella-iz.component';

describe('HuellaIZComponent', () => {
  let component: HuellaIZComponent;
  let fixture: ComponentFixture<HuellaIZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuellaIZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuellaIZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
