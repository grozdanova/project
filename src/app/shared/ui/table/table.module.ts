import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { TableComponent } from './table.component';


@NgModule({
  imports: [CommonModule, DataTableModule, SharedModule],
  declarations: [TableComponent],
  exports: [TableComponent],
  providers: []
})
export class TableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TableModule,
      providers: []
    };
  }
}
