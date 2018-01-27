import { Nmp } from '../../dashboard/models';
import * as fromActions from '../actions/nmp.actions';

export interface NmpState {
    nmp: Nmp[];
}
const initialState: NmpState = {
    nmp: []
};

export function nmpReducer (state = initialState,
    action: fromActions.ActionWithPayload): Object {
    switch (action.type) {
        case fromActions.ActionTypes.GET_NMP: {
            return {
                ...state
            };
        }
        case fromActions.ActionTypes.GET_NMP_SUCCESS: {
            const nmp = action.payload;
            return {nmp};
        }

        default:
            return state;
    }
}