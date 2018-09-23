import { DetailsComponent } from './details/details.component';
import { Step3Component } from './step3/step3.component';
import { Step2Component } from './step2/step2.component';
import { Step1Component } from './step1/step1.component';
import { ListingsComponent } from './listings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListingsComponent,
        children: [
            { path: '', redirectTo: 'step1' },
            { path: 'step1',
                children: [
                    { path: '', component: Step1Component },
                    { path: 'details', component: DetailsComponent },
                ]},
            { path: 'step2', component: Step2Component},
            { path: 'step3', component: Step3Component},
        ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ListingsRoutingModule { }