import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlechaVolverComponent } from './flecha-volver.component';

describe('FlechaVolverComponent', () => {
  let component: FlechaVolverComponent;
  let fixture: ComponentFixture<FlechaVolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlechaVolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlechaVolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
