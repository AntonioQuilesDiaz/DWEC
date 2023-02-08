import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolverLoginComponent } from './volver-login.component';

describe('VolverLoginComponent', () => {
  let component: VolverLoginComponent;
  let fixture: ComponentFixture<VolverLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolverLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolverLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
