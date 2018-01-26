import { Employee } from '../models';
import * as fromEmployeeActions from '../actions/dashboard.action';

export interface EmployeesListState {
    data: Employee[];
}
const initialState: EmployeesListState = {
    data: []
};

export function employeeReducer (state = initialState,
    action: fromEmployeeActions.ActionWithPayload): Object {
    switch (action.type) {
        case fromEmployeeActions.ActionTypes.LOAD_EMPLOYEES: {
            return {
                ...state
            };
        }
        case fromEmployeeActions.ActionTypes.LOAD_EMPLOYEES_SUCCESS: {
            const data = action.payload;
            return {data};
        }
        case fromEmployeeActions.ActionTypes.ADD_EMPLOYEE: {
            const data = state['data'].concat(action['employee']);
            return {data};
        }
        case fromEmployeeActions.ActionTypes.ADD_EMPLOYEE_SUCCESS: {
            const data = state['data'];
            return { data};
        }

        case fromEmployeeActions.ActionTypes.DELETE_EMPLOYEE: {
            const data = state['data'].filter((val) => {
                return val.id !== action['employeeID'];
            });
            return { data};
        }
        case fromEmployeeActions.ActionTypes.DELETE_EMPLOYEE_SUCCESS: {
            const data = state['data'];
            return {data};
        }
        case fromEmployeeActions.ActionTypes.UPDATEE_EMPLOYEE: {
            const data = state['data'].map((val, idx) => {
                if ( val.id == action['payload'].id ) {
                    return action['payload'];
                }
                return val;
            });
            return { data };
        }
        case fromEmployeeActions.ActionTypes.UPDATEE_EMPLOYEE_SUCCESS: {
            const data = state['data'];
            return {data};
        }
        default:
            return state;
    }
}
// export default function (state = initialState, action: Action): EmployeeListState {
//     switch (action.type) {
//         case EmployeeActions.LOAD_EMPLOYEES_SUCCESS: {
//             return action.payload;
//         }
//         case EmployeeActions.ADD_EMPLOYEE_SUCCESS: {
//             return [...state, action.payload ];
//         }
//         case EmployeeActions.DELETE_EMPLOYEE_SUCCESS: {
//             return state.filter(employee => {
//                 return employee.id !== action.payload.id;
//             });
//         }
//         default: {
//             return state;
//         }
//     }
// }
// export default function (state = initialState, action: Action): EmployeeState {
//     switch (action.type) {
//         case EmployeeActions.RESET_BLANK_Employee: {
//             return initialState;
//         }
//         case EmployeeActions.GET_Employee_SUCCESS: {
//             return action.payload;
//         }
//         default: {
//             return state;
//         }
//     }
// }
