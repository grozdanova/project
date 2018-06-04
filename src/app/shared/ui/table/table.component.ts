import { Component, AfterContentInit, ViewChild, Input, ContentChildren, QueryList } from '@angular/core';

import { Column } from 'primeng/components/common/shared';
import { DataTable } from 'primeng/components/datatable/datatable';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterContentInit {

  @ViewChild('datatable') datatable: DataTable;
  @ContentChildren(Column) cols: QueryList<Column>;

  @Input() value: any[];
  @Input() rows: number;
  @Input() paginator: boolean;
  @Input() totalRecords: number;
  @Input() pageLinks: number;


  ngAfterContentInit() {
    const originalDatatableNgAfterContentInit = this.datatable.ngAfterContentInit;
    this.datatable.ngAfterContentInit = () => {
      this.datatable.cols = this.cols;
      originalDatatableNgAfterContentInit.call(this.datatable);
    };
  }

}
