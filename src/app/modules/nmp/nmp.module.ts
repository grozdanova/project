import {DataTableModule, SharedModule} from 'primeng/primeng';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NmpComponent } from './nmp.component';
import { EmployeeService } from '../dashboard/services/employee.service';

@NgModule({
    imports: [CommonModule, DataTableModule, SharedModule],
    declarations: [NmpComponent],
    exports: [NmpComponent],
    providers: [ EmployeeService]
  })
  export class NmpModule {}
