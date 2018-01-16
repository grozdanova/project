import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Http, HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EmployeeService} from './services/employee.service';
import { AppComponent } from './app.component';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MenuModule } from './modules/menu/menu.module';
import { NavbarModule} from './modules/navbar/navbar.module';
import { HomeModule } from './modules/home/home.module';

import { routing } from './app.routing';

import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import reducer from './reducers';
import { EmployeeEffects } from './effects/employee.effects';
import { EmployeeActions } from './actions/actions';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
    routing,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(EmployeeEffects)
  ],
  providers: [EmployeeService, EmployeeActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
