import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { Bericht, Gesprek } from './chat-api/chat-api-models';
import { ChatApiService } from './chat-api/chat-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly api: ChatApiService) {}

  //lelijke tijdelijke tussen-functie om de gesprekken te groeperen
  public gesprekken$: Observable<Gesprek[]> = this.api.gesprekken$().pipe(
    scan((acc: Gesprek[], v: Gesprek) => {
      acc.push(v);
      return acc;
    }, [])
  );

  //lelijke tijdelijke tussen-functie om de berichten te groeperen
  public berichten$: Observable<Bericht[]> = this.api.berichten$().pipe(
    scan((acc: Bericht[], v: Bericht) => {
      acc.push(v);
      return acc;
    }, [])
  );
}
