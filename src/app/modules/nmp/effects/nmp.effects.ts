import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import { EmployeeService } from '../../dashboard/services/employee.service';
import * as fromActions from '../actions/nmp.actions';
import { GetNmpSuccess } from '../actions/nmp.actions';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NmpEffects {
    constructor(private actions$: Actions, private employeeService: EmployeeService) { }

    @Effect() getNmp$ = this.actions$
        .ofType(fromActions.ActionTypes.GET_NMP)
        .switchMap((action: fromActions.GetNmp) => this.employeeService.getNmp(action.payload))
        .map(nmp => new GetNmpSuccess(nmp));

}

