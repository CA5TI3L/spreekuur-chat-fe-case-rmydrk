import {Bericht, Gesprek} from "../../chat-api/chat-api-models";
import {Action, createReducer, on} from "@ngrx/store";
import {activeGesprek, getBerichtenComplete, getGesprekken, getGesprekkenComplete} from "../actions/chat.actions";


export const chatFeatureKey = 'chat';

export interface ChatState {
    isLoading: boolean;
    gesprekken: Gesprek[];
    activeGesprek: Gesprek;
    berichten: Bericht[];
}

const initialState: ChatState = {
    isLoading: false,
    gesprekken: [],
    activeGesprek: null,
    berichten: []
};

const ChatReducer = createReducer(
    initialState,
     on(getGesprekken, state => ({...state, isLoading: true})),
     on(getGesprekkenComplete, (state, action) => {
         let storedGesprekken = [...state.gesprekken];

         if (storedGesprekken.find(g => g.id === action.gesprek.id)) {
             const index = storedGesprekken.findIndex((el) => el.id === action.gesprek.id)
             storedGesprekken[index] = action.gesprek
         } else {
             storedGesprekken.push(action.gesprek)
         }

         storedGesprekken.sort((a: Gesprek,b: Gesprek) => {
             return new Date(b.aangemaakt).getTime() - new Date(a.aangemaakt).getTime();
         });

         return {
             ...state,
             isLoading: false,
             gesprekken: storedGesprekken
         };
     }),
    on(getBerichtenComplete, (state, action) => {
        const bericht = action.bericht;
        return {
            ...state,
            berichten: [
                ...state.berichten,
                bericht
            ]
        }
    }),
    on(activeGesprek, (state, action) => ({...state, activeGesprek: action.gesprek}))
)

export function reducer(state: ChatState | undefined, action: Action): any {
    return ChatReducer(state, action);
}

// const chatFeatureState = createFeatureSelector<ChatState>(splootState);
//
//
// export const selectGesprekken = createSelector(
//     chatFeatureState,
//     (state) => state?.gesprekken
// );
//
// export const selectGesprek = createSelector(
//     chatFeatureState,
//     (state) => state.gesprek
// );
