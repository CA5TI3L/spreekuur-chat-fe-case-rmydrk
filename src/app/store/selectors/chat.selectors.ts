import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ChatState} from "../reducers/chat.reducer";

const chatFeatureState = createFeatureSelector<ChatState>('chatState');

export const selectIsLoading = createSelector(
    chatFeatureState,
    (state) => state.isLoading
);

export const selectGesprekken = createSelector(
    chatFeatureState,
    (state) => state.gesprekken
);

export const selectActiveGesprek = createSelector(
    chatFeatureState,
    (state) => state.activeGesprek
);

export const selectBerichten = createSelector(
    chatFeatureState,
    (state) => {
        return state.berichten.filter(b => b.gesprekId === state.activeGesprek?.id)
    }
);


