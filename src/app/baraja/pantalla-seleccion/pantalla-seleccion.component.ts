import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-seleccion',
  templateUrl: './pantalla-seleccion.component.html',
  styleUrls: ['./pantalla-seleccion.component.css']
})
export class PantallaSeleccionComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  pagina(){ 
    this.route.navigate(['juegoCartas']);
    console.log('mandar a baraja');
  }
}
