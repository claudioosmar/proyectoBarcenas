import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorBarajaComponent } from './generador-baraja.component';

describe('GeneradorBarajaComponent', () => {
  let component: GeneradorBarajaComponent;
  let fixture: ComponentFixture<GeneradorBarajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneradorBarajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorBarajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
