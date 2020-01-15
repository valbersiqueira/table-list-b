import { Component, OnInit } from '@angular/core';
import { ItemTable } from '../table-list/table-list.component';

@Component({
  selector: 'a-table-table-list-b',
  templateUrl: './table-list-b.component.html',
  styleUrls: ['./table-list-b.component.scss']
})
export class TableListBComponent implements OnInit {

  itens: string[] = ['Nome', 'Codigo'];
  constructor() { }
  columns: ItemTableB[] = [];

  ngOnInit() {
    for (let i = 0 ; i < 10; i++) { 
      let data: DataColumn[] = [];
      for (let i = 0 ; i < 2; i++) { 
        data.push({dataName: `nome - ${i}`})
      }
      this.columns.push({list: data})
    }
    console.log(this.columns);
  }

}

export interface ItemTableB {
  list: DataColumn[];   
}

export interface DataColumn {
  dataName: string
}
