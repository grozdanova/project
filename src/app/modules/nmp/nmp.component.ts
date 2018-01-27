import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.store';
import * as fromActions from './actions/nmp.actions';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-nmp',
  templateUrl: './nmp.component.html',
  styleUrls: ['./nmp.component.css']
})
export class NmpComponent implements OnInit, OnDestroy {
  employee: Object;
  employeeItemObs: Observable<any>;
  employeeItemSubs: Subscription;
  getNmpObs: Observable<any>;
  getNmpSubs: Subscription;
data;


  constructor(private store: Store<fromRoot.AppState>) {
    this.employeeItemObs = store.select(fromRoot.getEmployeeItem);
    this.getNmpObs = store.select(fromRoot.getNmp);
   }

  ngOnInit() {
    this.employeeItemSubs = this.employeeItemObs.subscribe((data) => {
      if ((Object.keys(data).length) >= 0) {
        this.employee = data;
        let decomp = +(this.employee['id']);

        this.getNmpSubs = this.getNmpObs.subscribe((nmp: any) => {
          if ((Object.keys(data).length) >= 0) {
            this.data = nmp;
          }
        });
        if (!decomp) {
          decomp = 1;
        }
        this.store.dispatch(new fromActions.GetNmp(decomp));
      }
    });
  }
  ngOnDestroy() {
    this.employeeItemSubs.unsubscribe();
    this.getNmpSubs.unsubscribe();
  }

}
