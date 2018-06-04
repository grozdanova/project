import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import { EmployeeService } from '../dashboard/services/employee.service';
import * as fromActions from './search.actions';
import { of } from 'rxjs/observable/of';
import { GetPeopleSuccess } from './search.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchEffects {
    constructor(private actions$: Actions, private employeeService: EmployeeService) { }

    @Effect() loadEmployees$ = this.actions$
        .ofType(fromActions.ActionTypes.GET_PEOPLE)
        .switchMap(() => this.employeeService.getEmployees())
        .map(employees => new fromActions.GetPeopleSuccess(employees));

}
