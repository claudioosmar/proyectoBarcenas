import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generador-baraja',
  templateUrl: './generador-baraja.component.html',
  styleUrls: ['./generador-baraja.component.css']
})
export class GeneradorBarajaComponent implements OnInit {
  cartasSeleccionadas : String[] = [];
  idCartas : String[] = [];
  persona : String;

  constructor() { }

  ngOnInit() {
  }
  seleccionarCarta(evento:any){
    let monto : any;
    let constantevalor = 25;
    if(this.cartasSeleccionadas.includes(evento.toElement.alt)){
      alert('la carta ya se encuentra agregada');
    }else {
      let idmonto = document.getElementById("monto");
      let cantidad = (this.cartasSeleccionadas.length + 1) * constantevalor;
      this.cartasSeleccionadas.push(evento.toElement.alt);
      this.idCartas.push(evento.toElement.id); 
      monto = "$"+cantidad + ".00";
      idmonto.innerHTML = monto;
    }
  }
  eliminarCarta(event:any){
    let constantevalor = 25;
    let monto : any;
    const cartaEliminar = event.toElement.id;
    let posicion:any;
    for (let index = 0; index < this.idCartas.length; index++) {
      const element = this.idCartas[index];
      if(cartaEliminar === element){
        posicion = index;
        break;
      }
      
    }
    this.idCartas.splice(posicion, 1);
    this.cartasSeleccionadas.splice(posicion, 1);
    let idmonto = document.getElementById("monto");
    let cantidad = (this.cartasSeleccionadas.length) * constantevalor;
    monto = "$"+cantidad + ".00";
    idmonto.innerHTML = monto;
  }
}
