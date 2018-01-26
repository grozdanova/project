import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { Store } from '@ngrx/store';
import { EmployeeService } from '../dashboard/services/employee.service';
import * as fromRoot from '../../app.store';
import * as fromEmployeeActions from '../dashboard/actions/dashboard.action';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Employee } from '../dashboard/models/index';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  show: boolean;
  employee;
  header: string;
  msgs: Message[] = [];
  employeesObs: Observable<any>;
  employeeSubs: Subscription;
  data: Employee[];
  employeeItemObs: Observable<any>;
  employeeItemSubs: Subscription;

  constructor(private employeeService: EmployeeService,
    private store: Store<fromRoot.AppState>) {
    this.employeesObs = store.select(fromRoot.getEmployeeData);
    this.employeeItemObs = store.select(fromRoot.getEmployeeItem);
  }

  ngOnInit() {
    this.employeeSubs = this.employeesObs.subscribe((data: Employee[]) => {
      if (data && data.length >= 0) {
        this.data = data;
      }
    });
    this.store.dispatch(new fromEmployeeActions.LoadListEmployees());

    this.employeeItemSubs = this.employeeItemObs.subscribe((data: Object) => {
      if ((Object.keys(data).length) >= 0) {
        this.employee = data;
      }
    });
  }

  ngOnDestroy() {
    this.employeeSubs.unsubscribe();
    this.employeeItemSubs.unsubscribe();
  }

  showAdd() {
    this.header = 'Add new employee';
    this.employee = {};
    this.show = true;
  }
  showDelete() {
    if ((Object.keys(this.employee).length) > 0) {
      console.log(this.employee);
      this.store.dispatch(new fromEmployeeActions.DeleteEmployee(this.employee.id));
      this.employee = {};
    } else {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Please go to dashboard and choose employee!' });
    }
  }

  showUpdate() {
    if ((Object.keys(this.employee).length) > 0) {
      console.log(this.employee);
      this.header = 'Update Employee';
      this.show = true;
    } else {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Please go to dashboard and choose employee!' });
    }
  }
  dialogChange(event) {
    this.show = event;
  }

  save(form) {
    const data = form.value.data;
    let lastEmployee;
    if ((Object.keys(this.employee).length) !== 0) { // Update
      const updated = {
        id: this.employee.id,
        name: data['employee.name'],
        city: data['employee.city'],
        department: data['employee.department']
      };
      this.store.dispatch(new fromEmployeeActions.UpdateEmployee(updated));
      this.msgs = [];
      this.msgs.push({ severity: 'success', summary: 'You successfuly update employee!' });
      this.employee = {};
    } else { // Add new
      if (this.data.length === 0) {
        lastEmployee = 0;
      } else {
        lastEmployee = this.data[this.data.length - 1].id;
      }
      const employeeToAdd = {
        id: +(lastEmployee) + 1,
        name: data['employee.name'],
        city: data['employee.city'],
        department: data['employee.department']
      };
      this.store.dispatch(new fromEmployeeActions.AddEmployee(employeeToAdd));
      this.employee = {};
      form.resetForm();
      this.msgs = [];
      this.msgs.push({ severity: 'success', summary: 'You successfuly add employee!' });
    }


  }

}
