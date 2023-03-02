import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonesPageComponent } from './pokemones-page.component';

describe('PokemonesPageComponent', () => {
  let component: PokemonesPageComponent;
  let fixture: ComponentFixture<PokemonesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
