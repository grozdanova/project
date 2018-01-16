import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import { EmployeeActions } from '../actions/actions';
import { EmployeeService } from '../services/employee.service';
import { AppState} from '../reducers';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class EmployeeEffects {
    e;
    constructor (
        private update$: Actions,
        private employeeActions: EmployeeActions,
        private employeeService: EmployeeService
    ) {}

    @Effect() loadEmployees$ = this.update$
    .ofType(EmployeeActions.LOAD_EMPLOYEES)
    .switchMap(() => this.employeeService.getEmployees())
    .map(employees => this.employeeActions.loadEmployeesSuccess(employees));

    @Effect() getEmployee$ = this.update$
    .ofType(EmployeeActions.GET_EMPLOYEE)
    .switchMap(data => this.employeeService.getEmployee(data.payload))
    .map(employee => this.employeeActions.getEmployeeSuccess(employee));

    @Effect() addEmployee$ = this.update$
    .ofType(EmployeeActions.ADD_EMPLOYEE)
    .map(action => action.payload)
    .switchMap(employee => this.employeeService.addNewEmployee(employee))
    .map(hero => this.employeeActions.addEmployeeSuccess(hero));

@Effect() deleteHero$ = this.update$
    .ofType(EmployeeActions.DELETE_EMPLOYEE)
    .map(action => action.payload)
    .switchMap(employee => this.employeeService.delete(employee))
    .map(employee => this.employeeActions.deleteEmployeeSuccess(employee));
}
