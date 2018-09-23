import { Step3Component } from './step3/step3.component';
import { Step2Component } from './step2/step2.component';
import { DetailsComponent } from './details/details.component';
import { ListingsRoutingModule } from './listings.routing';
import { ListingsComponent } from './listings.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1/step1.component';

import {BreadcrumbModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ListingsRoutingModule,
    BreadcrumbModule
  ],
  declarations: [
    ListingsComponent,
    Step1Component,
    DetailsComponent,
    Step2Component,
    Step3Component
  ],
  providers: [  ]
})
export class ListingsModule {}
