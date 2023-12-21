import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  CellValueChangedEvent,
  ColDef,
  GridReadyEvent,
  RowSelectedEvent,
} from 'ag-grid-community';
import { CellChangedEvent } from 'ag-grid-community/dist/lib/interfaces/iRowNode';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value: string = 'Hi, My name is Anuj Kumbhar';
  title = 'AG-Grid-Application';
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  /* rowData: any[] = [
    { make: 'Toyata', model: 'Celica', price: 25000 },
    { make: 'Maruti', model: 'Create', price: 25000 },
    { make: 'Honda', model: 'Ciaz', price: 25000 },
  ]; */

  rowData$!: Observable<any[]>;

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
  };
  onGridReady(params: GridReadyEvent) {
    console.log(params);
  }
  onCellValueChanged = (event: CellValueChangedEvent) => {
    console.log(`New Cell Value: ${event.value}`);
  };
  onRowSelected(event: RowSelectedEvent) {
    console.log(event);
  }

  users: any[] = [
    { name: 'anuj', age: 28 },
    { name: 'komal', age: 29 },
  ];
  users$ = of(this.users);
  userName$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>(
      ' https://www.ag-grid.com/example-assets/row-data.json'
    );
    /*   this.users$.subscribe((res) => {
      console.log(res);
    }); */
  }

  onCellClick(event: CellClickedEvent) {
    console.log(event);
  }
  clrSelection() {
    this.agGrid.api.deselectAll();
  }
  showObj(data: any) {
    console.log(data);
    // alert(data);
  }
}
