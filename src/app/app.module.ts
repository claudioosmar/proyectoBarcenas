import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneradorBarajaComponent } from './baraja/generador-baraja/generador-baraja.component';
import { AdministradorComponent } from './baraja/administrador/administrador.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PantallaSeleccionComponent } from './baraja/pantalla-seleccion/pantalla-seleccion.component';

const routes:Routes = [
  {path:'',component:AdministradorComponent},
  {path:'inicio',component:AppComponent},
  {path:'juegoCartas', component:GeneradorBarajaComponent},
  {path:'pantallaSeleccion',component:PantallaSeleccionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GeneradorBarajaComponent,
    AdministradorComponent,
    HeaderComponent,
    FooterComponent,
    PantallaSeleccionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){

  }
}

