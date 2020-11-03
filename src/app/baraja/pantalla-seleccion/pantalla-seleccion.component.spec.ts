import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaSeleccionComponent } from './pantalla-seleccion.component';

describe('PantallaSeleccionComponent', () => {
  let component: PantallaSeleccionComponent;
  let fixture: ComponentFixture<PantallaSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
