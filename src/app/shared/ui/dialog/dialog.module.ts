import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, DataTableModule, SharedModule,
      DialogModule, InputTextModule, ButtonModule, ReactiveFormsModule],
    declarations: [DialogComponent],
    exports: [DialogComponent],
    providers: []
  })
  export class CustomDialogModule {
  }
