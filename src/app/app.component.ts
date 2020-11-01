import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HeaderComponent) header:HeaderComponent;
  title = 'BARAJA FAMILIA';
  @ViewChild(FooterComponent) footet:FooterComponent;
}
