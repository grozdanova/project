import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
import {combineReducers} from '@ngrx/store';

import employeeListReducer, * as fromEmployeeList from './employees-list';
import employeeReducer, * as fromEmployee from './employee';

export interface AppState {
    employees: fromEmployeeList.EmployeeListState;
    employee: fromEmployee.EmployeeState;
}

export default compose(combineReducers)({
    employees: employeeListReducer,
    employee: employeeReducer
});
