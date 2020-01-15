import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, AfterContentChecked, ChangeDetectorRef, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableListComponent implements OnInit, AfterContentChecked, AfterContentInit {

  @Input() dataSource: MatTableDataSource<any>;
  @Input() displayColumns: string[] =[];
  @Input() paginatorSize: string[] = ['20'];
  @Input() itens: ItemTable;
  @Input() header = true;
  @Output() clickRowHandler = new EventEmitter<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }
  
  onRowClicked(row: any) {
    this.clickRowHandler.emit(row);
  }
  
  ngAfterContentChecked() {
    this.cd.detectChanges();
  }
  
  ngAfterContentInit() {
    this.dataSource.paginator = this.paginator;
  }

  changeStyle(item) {
    return {'flex' : `0 0 ${item.percent};`}
  }

}


export interface ItemTable {
  columnName: string;
  headerName: string;
  headerMobile?: string;
  percent: string
}