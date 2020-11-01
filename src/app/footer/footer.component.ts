import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class valorReloj {
  anio: String;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  datos$: Observable<valorReloj>;
  anioac: String;
  clock: Observable<Date>;
  infofecha$ = new Subject<valorReloj>();
  vr: valorReloj;

  constructor() {
    this.clock = timer(0, 1000).pipe(map(t => new Date()), shareReplay(1));
  }
  getInfoReloj(): Observable<valorReloj> {
    this.clock.subscribe(t => {
      this.vr = {
        anio: t.toLocaleString('es-MX', { year:'numeric'})
      }
      this.infofecha$.next(this.vr);
    });
    return this.infofecha$.asObservable();
  }

  ngOnInit() {
    this.datos$ = this.getInfoReloj();
    this.datos$.subscribe(x => {
      this.anioac = x.anio;
    });
  }

}
