import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
  }

  getEmployees() {
    return this.http.get('http://localhost:3000/employees').map(res => res.json());
  }
  getEmployee(id) {
    return this.http.get('http://localhost:3000/employees/' + id).map(res => res.json());
  }
  addNewEmployee(employee) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    const body = JSON.stringify(employee);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/employees',
     body, {
      headers: headers
     }).map(res => res.json());
  }
  update(id, newData) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify(newData);
    return this.http.patch('http://localhost:3000/employees/' + id,
      body, {
        headers: headers
      }).map(res => res.json());
  }
  delete(employee) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://localhost:3000/employees/' + employee.id,
     {
        headers: headers
      }).map(res => employee);
  }
}
