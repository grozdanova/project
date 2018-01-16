import {Action, ActionReducer} from '@ngrx/store';
import { Employee } from '../models';
import { EmployeeActions } from '../actions/actions';


export type EmployeeListState = Employee[];

const initialState: EmployeeListState = [];

export default function (state = initialState, action: Action): EmployeeListState {
    switch (action.type) {
        case EmployeeActions.LOAD_EMPLOYEES_SUCCESS: {
            return action.payload;
        }
        case EmployeeActions.ADD_EMPLOYEE_SUCCESS: {
            return [...state, action.payload ];
        }
        case EmployeeActions.DELETE_EMPLOYEE_SUCCESS: {
            return state.filter(employee => {
                return employee.id !== action.payload.id;
            });
        }
        default: {
            return state;
        }
    }
}