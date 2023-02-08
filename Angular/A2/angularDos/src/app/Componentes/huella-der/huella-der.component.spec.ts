import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuellaDERComponent } from './huella-der.component';

describe('HuellaDERComponent', () => {
  let component: HuellaDERComponent;
  let fixture: ComponentFixture<HuellaDERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuellaDERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuellaDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
