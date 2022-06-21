import {Component, OnInit, VERSION} from '@angular/core';
import { Observable } from 'rxjs';
import {Bericht, Gesprek} from './chat-api/chat-api-models';
import {Store} from "@ngrx/store";
import {ChatState} from "./store/reducers/chat.reducer";
import {
  selectActiveGesprek,
  selectBerichten,
  selectGesprekken,
  selectIsLoading
} from "./store/selectors/chat.selectors";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  gesprekken$: Observable<Gesprek[]>;
  berichten$: Observable<Bericht[]>;
  activeGesprek$: Observable<Gesprek>;
  isLoading$: Observable<boolean>;

  constructor(private chatStore: Store<ChatState>) {}

  ngOnInit(): void {
    this.gesprekken$ = this.chatStore.select(selectGesprekken);
    this.berichten$ = this.chatStore.select(selectBerichten);
    this.activeGesprek$ = this.chatStore.select(selectActiveGesprek);
    this.isLoading$ = this.chatStore.select(selectIsLoading);
  }
}
