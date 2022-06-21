import {Component, Input, OnInit} from '@angular/core';
import {Gesprek} from "../../chat-api/chat-api-models";
import {Store} from "@ngrx/store";
import {ChatState} from "../../store/reducers/chat.reducer";
import {activeGesprek, getGesprekken} from "../../store/actions/chat.actions";

@Component({
  selector: 'app-gesprekken',
  templateUrl: './gesprekken.component.html',
  styleUrls: ['./gesprekken.component.css']
})
export class GesprekkenComponent implements OnInit {

  @Input() activeGesprek!: Gesprek;
  @Input() gesprekken!: Gesprek[];
  @Input() isLoading: boolean = false;

  constructor(private chatStore: Store<ChatState>) {}

  ngOnInit(): void {
    this.chatStore.dispatch(getGesprekken())
  }

  selectGesprek(gesprek: Gesprek): void {
    this.chatStore.dispatch(activeGesprek({gesprek}))
  }

}
