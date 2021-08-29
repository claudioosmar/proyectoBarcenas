import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministradorService } from './app.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
  providers:[AdministradorService]
})
export class AdministradorComponent implements OnInit {

  constructor(private route:Router,private appService:AdministradorService) { }

  ngOnInit() {
  }

<<<<<<< HEAD
  pagina(){ 
    this.route.navigate(['pantallaSeleccion']);
    console.log('se abrio pantalla seleccion');
=======
  pagina(user:String,pass:String){ 
    console.log("usuario: "+user+" pass: "+pass);
    //this.appService.login(user,pass);
    this.route.navigate(['juegoUno']);
    console.log('mandar a baraja');
>>>>>>> cae67421b1601086b0852cb8c2653cfe8ba16f26
  }
}
