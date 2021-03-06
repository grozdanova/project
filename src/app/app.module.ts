import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Http, HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EmployeeService} from './modules/dashboard/services/employee.service';
import { AppComponent } from './app.component';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MenuModule } from './modules/menu/menu.module';
import { NavbarModule} from './modules/navbar/navbar.module';
import { HomeModule } from './modules/home/home.module';
import { CustomDialogModule } from '../app/shared/ui/dialog/dialog.module';

import { routing } from './app.routing';

import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { reducers } from './app.store';
import { EmployeeEffects } from './modules/dashboard/effects/dashboard.effects';
import * as fromEmployeeActions from './modules/dashboard/actions/dashboard.action';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TableModule } from './shared/ui/table/table.module';

import { MyCustomDialogModule } from './../ui/myDialog/customDialog.module';
import {OrderListModule} from 'primeng/components/orderlist/orderlist';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    MenuModule,
    NavbarModule,
    HomeModule,
    CustomDialogModule,
    TableModule,
    MyCustomDialogModule,
    routing,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([EmployeeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    OrderListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
