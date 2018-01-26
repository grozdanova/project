import { Employee } from '../models';
import * as fromEmployeeActions from '../actions/dashboard.action';

export interface EmployeeItemState {
    selectedItem: Employee[];
}

const initialState: EmployeeItemState = {
    selectedItem: []
};

export function employeeItemReducer(state = initialState, action: fromEmployeeActions.ActionWithPayload) {
    switch (action.type) {
        case fromEmployeeActions.ActionTypes.SELECT_EMPLOYEE_ITEM: {
            const selectedItem = action['payload'];
            return {...state, selectedItem};
        }

        default: {
            return state;
        }
    }
}