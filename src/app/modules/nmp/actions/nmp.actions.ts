import {Action, ActionReducer} from '@ngrx/store';
import { Nmp } from '../../dashboard/models';

export const ActionTypes = {
    GET_NMP: '[Nmp] Get nmp',
    GET_NMP_SUCCESS: '[Nmp] Get nmp Success',
};

export class GetNmp implements Action {
    type = ActionTypes.GET_NMP;
    constructor(public payload) {}
}
export class GetNmpSuccess implements Action {
    type = ActionTypes.GET_NMP_SUCCESS;
    constructor(public payload) {}
}

export type EmployeeActions = GetNmp
| GetNmpSuccess;

export interface ActionWithPayload extends Action {
    payload: any;
  }
