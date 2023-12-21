import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  GridOptions,
  ValueFormatterParams,
  ValueFormatterService,
} from 'ag-grid-community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() parentToChild = '';
  @Output() childEmitter = new EventEmitter();
  // public gridOptions: GridOptions;

  /*  constructor() {
    this.gridOptions = <GridOptions>{
      columnDefs: this.createColumnDefs(),
    };
  } */
  rowData: any[] = [
    { projectID: '1', projectName: 'Toyata' },
    { projectID: '2', projectName: 'Maruti' },
    { projectID: '3', projectName: 'Honda' },
  ];

  createColumnDefs() {
    return [
      {
        headerName: 'Project ID',
        field: 'projectID',
        checkboxSelection: true,
        valueFormatter: (params: ValueFormatterParams) => {
          return '$' + params.value.toLocaleString();
        },
      },
      { headerName: 'Project Name', field: 'projectName' },
    ];
  }

  clickButton() {
    this.childEmitter.emit([
      { name: 'Anuj', age: 25 },
      { name: 'Komal Anuj Kumbhar', age: 22 },
    ]);
  }
}
