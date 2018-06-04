import * as fromRoot from '../../app.store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as searchActions from './search.actions';

export interface SearchState {
    people: Object[]
}

export const initialState: SearchState = {
    people: []
};

export function searchReducer(state = initialState, action: searchActions.SearchActions) {
    switch (action.type) {
        case searchActions.ActionTypes.GET_PEOPLE: {
            return {
                ...state
            };
        }
        case searchActions.ActionTypes.GET_PEOPLE_SUCCESS: {
            return {
                ...state,
                data: action['people']
            };
        }
        default:
            return state;
    }
}

export interface State extends fromRoot.AppState {
    'people': SearchState
}
