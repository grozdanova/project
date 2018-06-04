import {Action} from '@ngrx/store';
import { Employee } from '../dashboard/models/emloyee';

export const ActionTypes = {
    GET_PEOPLE: '[SEARCH] Get people',
    GET_PEOPLE_SUCCESS: '[SEARCH] Get people Success',
};

export class GetPeople implements Action {
    type = ActionTypes.GET_PEOPLE;
    constructor() {}
}
export class GetPeopleSuccess implements Action {
    type = ActionTypes.GET_PEOPLE_SUCCESS;
    constructor(public people: Employee[]) {}
}

export type SearchActions = GetPeople | GetPeopleSuccess;
