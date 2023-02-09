import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMedianoComponent } from './logo-mediano.component';

describe('LogoMedianoComponent', () => {
  let component: LogoMedianoComponent;
  let fixture: ComponentFixture<LogoMedianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoMedianoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoMedianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
