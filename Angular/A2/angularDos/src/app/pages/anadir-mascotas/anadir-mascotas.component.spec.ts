import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirMascotasComponent } from './anadir-mascotas.component';

describe('AnadirMascotasComponent', () => {
  let component: AnadirMascotasComponent;
  let fixture: ComponentFixture<AnadirMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
