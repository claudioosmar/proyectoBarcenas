import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  pagina(){ 
    this.route.navigate(['pantallaSeleccion']);
    console.log('se abrio pantalla seleccion');
  }
}
