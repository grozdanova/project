import {Injectable} from '@angular/core';
import {Action, ActionReducer} from '@ngrx/store';

import { Employee } from '../models';

@Injectable()
export class EmployeeActions {
    static LOAD_EMPLOYEES = '[Employee] Load Employees';
    loadEmployees(): Action {
        return {
            type: EmployeeActions.LOAD_EMPLOYEES
        };
    }

    static LOAD_EMPLOYEES_SUCCESS = '[Employee] Load Employees Success';
    loadEmployeesSuccess(employees): Action {
        return {
            type: EmployeeActions.LOAD_EMPLOYEES_SUCCESS,
            payload: employees
        };
    }

    static RESET_BLANK_Employee = '[Employee] Reset Blank Employee';
    resetBlankEmployee(): Action {
        return {
            type: EmployeeActions.RESET_BLANK_Employee
        };
    }
    static GET_EMPLOYEE = '[Employee] Get Employee';
    getEmployee(id): Action {
        return {
            type: EmployeeActions.GET_EMPLOYEE,
            payload: id
        };
    }
    static GET_Employee_SUCCESS = '[Employee] Get Employee Success';
    getEmployeeSuccess(employee): Action {
        return {
            type: EmployeeActions.GET_Employee_SUCCESS,
            payload: employee
        };
    }
    static ADD_EMPLOYEE = '[Employee] Add Employee';
    addEmployee(employee): Action {
        return {
            type: EmployeeActions.ADD_EMPLOYEE,
            payload: employee
        };
    }

    static ADD_EMPLOYEE_SUCCESS = '[Employee] Add Employee Success';
    addEmployeeSuccess(employee): Action {
        return {
            type: EmployeeActions.ADD_EMPLOYEE_SUCCESS,
            payload: employee
        };
    }

    static DELETE_EMPLOYEE = '[Employee] Delete Employee';
    deleteEmployee(employee): Action {
        return {
            type: EmployeeActions.DELETE_EMPLOYEE,
            payload: employee
        };
    }

    static DELETE_EMPLOYEE_SUCCESS = '[Hero] Delete Hero Success';
    deleteEmployeeSuccess(employee): Action {
        return {
            type: EmployeeActions.DELETE_EMPLOYEE_SUCCESS,
            payload: employee
        };
    }


}
