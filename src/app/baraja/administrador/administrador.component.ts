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

  pagina(user:String,pass:String){ 
    console.log("usuario: "+user+" pass: "+pass);
    //this.appService.login(user,pass);
    this.route.navigate(['juegoUno']);
    console.log('mandar a baraja');
  }
}
