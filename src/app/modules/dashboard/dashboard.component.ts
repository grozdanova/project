import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { AppState } from '../../reducers';
import { EmployeeActions } from '../../actions/actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data;
  dialog: boolean;
  employee;
  newEmployee;
  lastEmployee;
  current;
  employees: Observable<any>;
  e: Observable<any>;
  constructor(private employeeService: EmployeeService,
    private store: Store<AppState>,
    private employeeActions: EmployeeActions) {
      this.employees = store.select('employees');
      this.e = store.select('employee');
      }

  ngOnInit() {
    this.getData();
    this.store.dispatch(this.employeeActions.loadEmployees());
    console.log(this.employees);
  }
  getData() {
    this.employeeService.getEmployees().subscribe(res => this.data = res);
  }
  onRowSelect(event) {
    this.newEmployee = false;
    this.employee = event.data;
    this.store.dispatch(this.employeeActions.getEmployee(this.employee.id));
    this.dialog = true;
  }
  showDialog() {
    this.newEmployee = true;
    this.employee = {};
    this.dialog = true;
  }
  save() {
    this.lastEmployee = this.data[this.data.length - 1];
    if (this.newEmployee) {
      const employeeToAdd = {
        id: +(this.lastEmployee.id) + 1,
        name: this.employee.name,
        city: this.employee.city,
        department: this.employee.department
      };
      this.store.dispatch(this.employeeActions.addEmployee(employeeToAdd));
      this.employee = {};

      // this.employeeService.addNewEmployee(employeeToAdd).subscribe(
      //   data => {
      //     this.employee = {};
      //     console.log('added');
      //     this.getData();
      //   });
    } else {
      this.employeeService.update(this.employee.id, this.employee).subscribe(
        data => {
          console.log(this.employee);
          this.employee = {};
          console.log('updated!');
          this.getData();
        });
    }
  }
  delete() {
    this.store.dispatch(this.employeeActions.deleteEmployee(this.employee));
    this.employee = {};
// this.employeeService.delete(this.employee).subscribe(
//   data => {
//     this.employee = {};
//     console.log('deleted!');
//     this.getData();
//   });
  }
}
