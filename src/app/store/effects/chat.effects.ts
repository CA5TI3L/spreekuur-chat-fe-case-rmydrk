import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {mergeMap} from "rxjs";
import {ChatApiService} from "../../chat-api/chat-api.service";
import {
    addPersoonToBericht,
    getBerichten,
    getBerichtenComplete,
    getGesprekken,
    getGesprekkenComplete
} from "../actions/chat.actions";
import {map} from "rxjs/operators";
import {Bericht, Gesprek, Persoon} from "../../chat-api/chat-api-models";

@Injectable()
export class ChatEffects {

    constructor(private actions$: Actions, private api: ChatApiService) {}

    getGesprekken$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getGesprekken),
            mergeMap(() =>  this.api.gesprekken$().pipe(
                map((response: Gesprek) => {
                    return getGesprekkenComplete({gesprek: response})
                })
            ))
        )
      }
    )

    getBerichten$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(getBerichten),
                mergeMap(() =>  this.api.berichten$().pipe(
                    map((response: Bericht) => {
                        return addPersoonToBericht({bericht: response})
                    })
                ))
            )
        }
    )

    getPeroon$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(addPersoonToBericht),
                mergeMap((action) =>  this.api.fetchPersoon(action.bericht.afzenderId).pipe(
                    map((response: Persoon) => {
                        let tempBericht = {...action.bericht};
                        tempBericht.afzenderNaam = response.naam
                        return getBerichtenComplete({bericht: tempBericht})
                    })
                ))
            )
        }
    )
}
