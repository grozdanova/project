import {ActionReducerMap} from '@ngrx/store';

import { employeeReducer, EmployeesListState } from './modules/dashboard/reducers/dashboard.reducer';
import { employeeItemReducer, EmployeeItemState} from './modules/dashboard/reducers/dashboard-item.reducer';
import { createSelector } from '@ngrx/store/src/selector';
import { nmpReducer , NmpState } from './modules/nmp/reducers/nmp.reducer';

export interface AppState {
    employees: EmployeesListState;
    selectedItem: EmployeeItemState;
    nmp: NmpState;
}
export const reducers: ActionReducerMap<any> = {
    employees: employeeReducer,
    selectedItem: employeeItemReducer,
    nmp: nmpReducer
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

export const selectNmp = (state: AppState) => state.nmp;
export const getNmp = createSelector(selectNmp, (state: NmpState) => state.nmp);
