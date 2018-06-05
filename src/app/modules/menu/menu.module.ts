import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { CustomDialogModule } from '../../shared/ui/dialog/dialog.module';
import {ButtonModule, GrowlModule} from 'primeng/primeng';
import { EmployeeService } from '../dashboard/services/employee.service';


@NgModule({
    imports: [CommonModule, CustomDialogModule, ButtonModule, GrowlModule],
    declarations: [MenuComponent],
    exports: [MenuComponent],
    providers: [EmployeeService]
  })
  export class MenuModule {}
