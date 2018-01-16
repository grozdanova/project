import { Action } from '@ngrx/store';
import { Employee } from '../models';
import { EmployeeActions } from '../actions/actions';

export type EmployeeState = Employee;

const initialState: EmployeeState = {
    id: 0,
    name: '',
    city: '',
    department: ''
};
export default function (state = initialState, action: Action): EmployeeState {
    switch (action.type) {
        case EmployeeActions.RESET_BLANK_Employee: {
            return initialState;
        }
        case EmployeeActions.GET_Employee_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}


