import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneradorBarajaComponent } from './baraja/generador-baraja/generador-baraja.component';
import { AdministradorComponent } from './baraja/administrador/administrador.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes:Routes = [
  {path:'',component:AdministradorComponent},
  {path:'inicio',component:AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GeneradorBarajaComponent,
    AdministradorComponent,
    HeaderComponent,
    FooterComponent
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

