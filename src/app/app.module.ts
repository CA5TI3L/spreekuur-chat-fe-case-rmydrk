import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatApiService } from './chat-api/chat-api.service';
import { GesprekkenComponent } from './components/gesprekken/gesprekken.component';
import { BerichtenComponent } from './components/berichten/berichten.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, GesprekkenComponent, BerichtenComponent],
  providers: [ChatApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
