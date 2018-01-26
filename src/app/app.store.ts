import {ActionReducerMap} from '@ngrx/store';

import { employeeReducer, EmployeesListState } from './modules/dashboard/reducers/dashboard.reducer';
import { employeeItemReducer, EmployeeItemState} from './modules/dashboard/reducers/dashboard-item.reducer';
import { createSelector } from '@ngrx/store/src/selector';

export interface AppState {
    employees: EmployeesListState;
    selectedItem: EmployeeItemState;
}
export const reducers: ActionReducerMap<any> = {
    employees: employeeReducer,
    selectedItem: employeeItemReducer
  };
// export interface AppState {
//     employees: fromEmployeeList.EmployeeListState;
//     employee: fromEmployee.EmployeeState;
// }

// export default compose(combineReducers)({
//     employees: employeeListReducer,
//     employee: employeeReducer
// });
export const selectEmployees = (state: AppState) => state.employees;

export const getEmployeeData = createSelector(selectEmployees, (state: EmployeesListState) => state.data);

export const selectEmployeeItem = (state: AppState) => state.selectedItem;
export const getEmployeeItem = createSelector(selectEmployeeItem, (state: EmployeeItemState ) => state.selectedItem);
