import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/emloyee';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data;
  dialog: boolean;
  employee;
  newEmployee;
  lastEmployee;
  current;

  constructor(private employeeService: EmployeeService) {

   }

  ngOnInit() {
    // this.getData();
  }

  // getData() {
  //   this.employeeService.getEmployees().subscribe(res => this.data = res);
  // }


}
