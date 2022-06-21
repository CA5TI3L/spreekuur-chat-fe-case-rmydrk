import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Gesprek} from "../../chat-api/chat-api-models";
import {scan} from "rxjs/operators";
import {ChatApiService} from "../../chat-api/chat-api.service";

@Component({
  selector: 'app-gesprekken',
  templateUrl: './gesprekken.component.html',
  styleUrls: ['./gesprekken.component.css']
})
export class GesprekkenComponent implements OnInit {

  constructor(private readonly api: ChatApiService) { }

  ngOnInit(): void {
  }

  //lelijke tijdelijke tussen-functie om de gesprekken te groeperen
  public gesprekken$: Observable<Gesprek[]> = this.api.gesprekken$().pipe(
      scan((acc: Gesprek[], v: Gesprek) => {
        acc.push(v);
        return acc;
      }, [])
  );

}
