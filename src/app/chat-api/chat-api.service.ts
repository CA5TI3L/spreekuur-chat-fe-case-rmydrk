import { Injectable } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
import { interval, Observable, of } from 'rxjs';
import { filter, map, tap, take } from 'rxjs/operators';
import { Bericht, Gesprek, Persoon } from './chat-api-models';

/**
 *  Deze API representeert een externe library voor een chat-client
 *
 *  De signatures zijn niet per sé het meest praktisch om mee te werken voor in de frontend, maar het is niet mogelijk deze aan te passen
 */
@Injectable()
export class ChatApiService {
  // Stream van binnenkomende gesprekken. Stel je voor dat hier iets websocket-achtigs achter hangt
  // Als een gesprek met hetzelfde id nogmaals binnenkomt, betekent dat dat iemand het onderwerp heeft aangepast
  public gesprekken$(): Observable<Gesprek> {
    return interval(5000).pipe(
      map(() => {
        return {
          id: this.randomId(),
          onderwerp: this.lipsum.generateSentences(1),
          aangemaakt: new Date(),
        };
      }),
      tap((g) => this.gesprekIds.add(g.id)),
      take(30)
    );
  }

  // Stream van binnenkomende berichten. Stel je voor dat hier iets websocket-achtigs achter hangt
  public berichten$(): Observable<Bericht> {
    return interval(1000).pipe(
      map((berichtId) => {
        return {
          id: berichtId,
          gesprekId: this.randomId(),
          afzenderId: this.randomId(),
          inhoud: this.lipsum.generateParagraphs(1),
          verzonden: new Date(),
        };
      }),
      //luie manier om te zorgen dat de testberichten altijd bij een bekend gesprek horen
      filter((b) => this.gesprekIds.has(b.gesprekId)),
      take(500)
    );
  }
  // API om persoon-details op te vragen. Stel je voor dat hier een Rest-API achter hangt
  public fetchPersoon(id: number): Observable<Persoon> {
    return of(this.personen[id]);
  }

  // schets van API om berichten te versturen
  // public stuurBericht(gesprekId:number, bericht: string): Observable<number>

  private lipsum = new LoremIpsum({
    sentencesPerParagraph: {
      max: 6,
      min: 1,
    },
    wordsPerSentence: {
      max: 12,
      min: 3,
    },
  });

  private randomId(): number {
    return Math.floor(Math.random() * 10);
  }

  private gesprekIds = new Set<number>();

  private personen: Persoon[] = Array(10)
    .fill(1)
    .map((_, i) => {
      return { id: i, naam: this.lipsum.generateWords(2) };
    });
}
