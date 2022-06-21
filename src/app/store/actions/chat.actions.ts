import {createAction, props} from "@ngrx/store";
import {Bericht, Gesprek} from "../../chat-api/chat-api-models";

export const getGesprekken = createAction(
    '[chat] getGesprekken'
);

export const getGesprekkenComplete = createAction(
    '[chat] getGesprekkenComplete',
    props<{ gesprek: Gesprek }>()
);

export const getBerichten = createAction(
    '[chat] getBerichten'
);

export const getBerichtenComplete = createAction(
    '[chat] getBerichtenComplete',
    props<{ bericht: Bericht }>()
);

export const activeGesprek = createAction(
    '[chat] activeGesprek',
    props<{ gesprek: Gesprek }>()
);

export const addPersoonToBericht = createAction(
    '[chat] getPersoon',
    props<{ bericht: Bericht }>()
);

