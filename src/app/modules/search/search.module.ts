import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule, GrowlModule, ScheduleModule} from 'primeng/primeng';
import { EmployeeService } from '../dashboard/services/employee.service';
import { SearchComponent } from './search.component';
import { TableModule } from '../../shared/ui/table/table.module';
import { SharedModule } from 'primeng/primeng';
import $ from 'jquery';
import 'fullcalendar';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { searchReducer } from './search.reducer';
import { SearchEffects } from './search.effects';

const routes: Routes = [
  {path: '', component: SearchComponent}
];

@NgModule({
    imports: [
      CommonModule,
      ButtonModule,
      GrowlModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      TableModule,
      ScheduleModule,
      RouterModule.forChild(routes),
      StoreModule.forFeature('people', searchReducer),
      EffectsModule.forFeature([SearchEffects])
    ],
    declarations: [SearchComponent],
    exports: [SearchComponent],
    providers: [EmployeeService]
  })
  export class SearchModule {

}
