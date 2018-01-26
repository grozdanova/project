import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import { EmployeeService } from '../services/employee.service';
import * as fromEmployeeActions from '../actions/dashboard.action';
import { of } from 'rxjs/observable/of';
import { UpdateEmployeeSuccess } from '../actions/dashboard.action';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeEffects {
    constructor(private actions$: Actions, private employeeService: EmployeeService) { }

    @Effect() loadEmployees$ = this.actions$
        .ofType(fromEmployeeActions.ActionTypes.LOAD_EMPLOYEES)
        .switchMap(() => this.employeeService.getEmployees())
        .map(employees => new fromEmployeeActions.LoadListEmployeesSuccess(employees));
    // .catch((error) => Observable.throw( 'Server error'));

    @Effect() addEmployee$ = this.actions$
        .ofType(fromEmployeeActions.ActionTypes.ADD_EMPLOYEE)
        .switchMap((action: fromEmployeeActions.AddEmployee) => this.employeeService.addNewEmployee(action.employee))
        .map(employee => new fromEmployeeActions.AddEmployeeSuccess(employee));

    @Effect() deleteEmployee$ = this.actions$
        .ofType(fromEmployeeActions.ActionTypes.DELETE_EMPLOYEE)
        .switchMap((action: fromEmployeeActions.DeleteEmployee) => this.employeeService.delete(action.employeeID))
        .map(employee => new fromEmployeeActions.DeleteEmployeeSuccess(employee));

    @Effect() updateEmployee$ = this.actions$
        .ofType(fromEmployeeActions.ActionTypes.UPDATEE_EMPLOYEE)
        .switchMap((action: fromEmployeeActions.UpdateEmployee) => this.employeeService.update(action.payload)
            .map((data) => {
                return new UpdateEmployeeSuccess(data);
            })
        );
}


// export class EmployeeEffects {
//     constructor (
//         private update$: Actions,
//         private employeeActions: EmployeeActions,
//         private employeeService: EmployeeService
//     ) {}

//     @Effect() loadEmployees$ = this.update$
//     .ofType(EmployeeActions.LOAD_EMPLOYEES)
//     .switchMap(() => this.employeeService.getEmployees())
//     .map(employees => this.employeeActions.loadEmployeesSuccess(employees));

//     @Effect() getEmployee$ = this.update$
//     .ofType(EmployeeActions.GET_EMPLOYEE)
//     .switchMap(data => this.employeeService.getEmployee(data.payload))
//     .map(employee => this.employeeActions.getEmployeeSuccess(employee));

//     @Effect() addEmployee$ = this.update$
//     .ofType(EmployeeActions.ADD_EMPLOYEE)
//     .map(action => action.payload)
//     .switchMap(employee => this.employeeService.addNewEmployee(employee))
//     .map(hero => this.employeeActions.addEmployeeSuccess(hero));

// @Effect() deleteHero$ = this.update$
//     .ofType(EmployeeActions.DELETE_EMPLOYEE)
//     .map(action => action.payload)
//     .switchMap(employee => this.employeeService.delete(employee))
//     .map(employee => this.employeeActions.deleteEmployeeSuccess(employee));
// }
