import {Action, ActionReducer} from '@ngrx/store';
import { Employee } from '../models';

export const ActionTypes = {
    LOAD_EMPLOYEES: '[Employee] Load List Employees',
    LOAD_EMPLOYEES_SUCCESS: '[Employee] Load List Employees Success',
    SELECT_EMPLOYEE_ITEM: '[Employee] Select item',
    ADD_EMPLOYEE: '[Employee] Add Employee',
    ADD_EMPLOYEE_SUCCESS: '[Employee] Add Employee Success',
    DELETE_EMPLOYEE: '[Employee] Delete Employee',
    DELETE_EMPLOYEE_SUCCESS: '[Employee] Delete Employee Success',
    UPDATEE_EMPLOYEE: '[Employee] Update Employee',
    UPDATEE_EMPLOYEE_SUCCESS: '[Employee] Update Employee Success',
};

export class LoadListEmployees implements Action {
    type = ActionTypes.LOAD_EMPLOYEES;
    constructor() {}
}
export class LoadListEmployeesSuccess implements Action {
    type = ActionTypes.LOAD_EMPLOYEES_SUCCESS;
    constructor(public payload: Employee[]) {}
}
export class SelectEmployeeItem implements Action {
    type = ActionTypes.SELECT_EMPLOYEE_ITEM;
    constructor(public payload: any) {}
}
export class AddEmployee implements Action {
    type = ActionTypes.ADD_EMPLOYEE;
    constructor(public employee: Employee) {}
}
export class AddEmployeeSuccess implements Action {
    type = ActionTypes.ADD_EMPLOYEE_SUCCESS;
    constructor(public payload: string) {}
}
export class DeleteEmployee implements Action {
    type = ActionTypes.DELETE_EMPLOYEE;
    constructor(public employeeID: number) {}
}
export class DeleteEmployeeSuccess implements Action {
    type = ActionTypes.DELETE_EMPLOYEE_SUCCESS;
    constructor(public payload: string) {}
}
export class UpdateEmployee implements Action {
    type = ActionTypes.UPDATEE_EMPLOYEE;
    constructor(public payload: Employee) {}
}
export class UpdateEmployeeSuccess implements Action {
    type = ActionTypes.UPDATEE_EMPLOYEE_SUCCESS;
    constructor(public payload: any) {}
}
export type EmployeeActions = LoadListEmployees
| LoadListEmployeesSuccess
| SelectEmployeeItem
| AddEmployee
| AddEmployeeSuccess
| DeleteEmployee
| DeleteEmployeeSuccess
| UpdateEmployee
| UpdateEmployeeSuccess;

export interface ActionWithPayload extends Action {
    payload: any;
  }

// export class EmployeeActions {
//     static LOAD_EMPLOYEES = '[Employee] Load Employees';
//     loadEmployees(): Action {
//         return {
//             type: EmployeeActions.LOAD_EMPLOYEES
//         };
//     }

//     static LOAD_EMPLOYEES_SUCCESS = '[Employee] Load Employees Success';
//     loadEmployeesSuccess(employees): Action {
//         return {
//             type: EmployeeActions.LOAD_EMPLOYEES_SUCCESS,
//             payload: employees
//         };
//     }

//     static RESET_BLANK_Employee = '[Employee] Reset Blank Employee';
//     resetBlankEmployee(): Action {
//         return {
//             type: EmployeeActions.RESET_BLANK_Employee
//         };
//     }
//     static GET_EMPLOYEE = '[Employee] Get Employee';
//     getEmployee(id): Action {
//         return {
//             type: EmployeeActions.GET_EMPLOYEE,
//             payload: id
//         };
//     }
//     static GET_Employee_SUCCESS = '[Employee] Get Employee Success';
//     getEmployeeSuccess(employee): Action {
//         return {
//             type: EmployeeActions.GET_Employee_SUCCESS,
//             payload: employee
//         };
//     }
//     static ADD_EMPLOYEE = '[Employee] Add Employee';
//     addEmployee(employee): Action {
//         return {
//             type: EmployeeActions.ADD_EMPLOYEE,
//             payload: employee
//         };
//     }

//     static ADD_EMPLOYEE_SUCCESS = '[Employee] Add Employee Success';
//     addEmployeeSuccess(employee): Action {
//         return {
//             type: EmployeeActions.ADD_EMPLOYEE_SUCCESS,
//             payload: employee
//         };
//     }

//     static DELETE_EMPLOYEE = '[Employee] Delete Employee';
//     deleteEmployee(employee): Action {
//         return {
//             type: EmployeeActions.DELETE_EMPLOYEE,
//             payload: employee
//         };
//     }

//     static DELETE_EMPLOYEE_SUCCESS = '[Employee] Delete Employee Success';
//     deleteEmployeeSuccess(employee): Action {
//         return {
//             type: EmployeeActions.DELETE_EMPLOYEE_SUCCESS,
//             payload: employee
//         };
//     }
// }