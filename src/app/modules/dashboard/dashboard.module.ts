import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/primeng';
@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, SharedModule,
        DialogModule, InputTextModule, ButtonModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: []
  })
  export class DashboardModule {}
