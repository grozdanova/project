import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromEmployeeActions from './actions/dashboard.action';
import * as fromRoot from '../../app.store';
import { Subscription } from 'rxjs/Subscription';
import { Employee } from './models';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  data: Employee[];
  show: boolean;
  employee;
  newEmployee: boolean;
  employeesObs: Observable<any>;
  employeeItemObs: Observable<any>;
  employeeSubs: Subscription;
  employeeItemSubs: Subscription;
  msgs: Message[] = [];
  header: string;
  selected: boolean;

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

    this.employeeItemSubs = this.employeeItemObs.subscribe((data: Employee[]) => {
      if (data && data.length >= 0) {
        this.employee = data;
      }
    });
  }

  ngOnDestroy() {
    this.employeeSubs.unsubscribe();
    this.employeeItemSubs.unsubscribe();
  }

  onRowSelect(event) {
    this.newEmployee = false;
    this.header = 'Update Employee';
    this.employee = event.data;
    this.store.dispatch(new fromEmployeeActions.SelectEmployeeItem(this.employee));
  }

  showDialog() {
    this.header = 'Add new employee';
    this.newEmployee = true;
    this.employee = {};
    this.show = true;
  }
  dialogChange(event) {
    this.show = event;
  }
  save(form) {
    const data = form.value.data;
    let lastEmployee;
    if (this.newEmployee) {
      // if no records set id
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
      form.resetForm();
      this.msgs = [];
      this.msgs.push({ severity: 'success', summary: 'You successfuly add employee!' });
      this.selected = false;
      this.employee = {};
      // this.employeeService.addNewEmployee(employeeToAdd).subscribe(
      //   data => {
      //     this.employee = {};
      //     console.log('added');
      //     this.getData();
      //   });
    } else {
      // this.employeeService.update(this.employee.id, this.employee).subscribe(
      //   data => {
      //     this.employee = {};
      //     console.log('updated!');
      //   });
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
      this.selected = false;
    }
  }
  update() {
    if (this.employee) {
      this.show = true;
    } else {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Please choose employee!' });
    }
  }
  delete() {
    if (this.employee) {
      this.store.dispatch(new fromEmployeeActions.DeleteEmployee(this.employee.id));
      this.employee = {};
      this.selected = false;
    } else {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Please choose employee!' });
    }
  }


}
