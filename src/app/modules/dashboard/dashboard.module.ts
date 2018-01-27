import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { EmployeeService } from './services/employee.service';
import {CustomDialogModule} from '../dialog/dialog.module';
import {GrowlModule} from 'primeng/primeng';
import { NmpModule } from '../nmp/nmp.module';

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, SharedModule, DialogModule,
         InputTextModule, ButtonModule, CustomDialogModule, GrowlModule, NmpModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [EmployeeService]
  })
  export class DashboardModule {}
