import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatApiService } from './chat-api/chat-api.service';
import { GesprekkenComponent } from './components/gesprekken/gesprekken.component';
import { BerichtenComponent } from './components/berichten/berichten.component';
import {ActionReducer, StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {reducer} from "./store/reducers/chat.reducer";
import {ChatEffects} from "./store/effects/chat.effects";
import { LetModule, PushModule } from '@ngrx/component';


export function debug(reducerInfo: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducerInfo(state, action);
  };
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({chatState: reducer}, {metaReducers: [debug]}),
    EffectsModule.forRoot([ChatEffects]),
    LetModule,
    PushModule
  ],
  declarations: [AppComponent, GesprekkenComponent, BerichtenComponent],
  providers: [ChatApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
