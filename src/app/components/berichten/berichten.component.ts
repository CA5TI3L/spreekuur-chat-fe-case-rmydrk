import {Component, Input, OnInit} from '@angular/core';
import {Bericht, Gesprek} from "../../chat-api/chat-api-models";
import {getBerichten} from "../../store/actions/chat.actions";
import {Store} from "@ngrx/store";
import {ChatState} from "../../store/reducers/chat.reducer";

@Component({
  selector: 'app-berichten',
  templateUrl: './berichten.component.html',
  styleUrls: ['./berichten.component.css']
})
export class BerichtenComponent implements OnInit {

  @Input() berichten!: Bericht[];
  @Input() activeGesprek!: Gesprek;

  constructor(private chatStore: Store<ChatState>) { }

  ngOnInit(): void {
    this.chatStore.dispatch(getBerichten())
  }

}
