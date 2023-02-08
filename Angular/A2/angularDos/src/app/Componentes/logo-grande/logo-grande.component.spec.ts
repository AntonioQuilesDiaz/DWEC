import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGrandeComponent } from './logo-grande.component';

describe('LogoGrandeComponent', () => {
  let component: LogoGrandeComponent;
  let fixture: ComponentFixture<LogoGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoGrandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
