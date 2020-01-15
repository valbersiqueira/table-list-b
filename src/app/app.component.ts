import { Component, ViewChild, OnInit } from '@angular/core';
import { ItemTable } from './table-list/table-list.component';
import { Cliente } from './cliente.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'a-table-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  clienteDataSource= new MatTableDataSource<Cliente>([]);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  clientes: Cliente[] = []

  ngOnInit() {
    for (let i = 0 ; i < 100; i++) {
      this.clientes.push(this.preencherObjTeste(i))
    }
    this.clienteDataSource.data = [... this.clientes];
    this.clienteDataSource.paginator = this.paginator;
  }
  
  displayColumns: string[] = [
    'codigo', 
    'fantasia', 
    'rzSocial', 
    'cnpj', 
    'telefone', 
    'celular', 
    'situacao', 
    'classificacao'
  ];

  private preencherObjTeste(i: number): Cliente {
    return { codigo: i, fantasia: `Nome fantasia count ${i}`, telefone: '3208-4594', celular: '99 9999-9999',
            rzSocial: `Razao social count ${i}`, cnpj: '02.124.1324/0001-02', situacao: 'Ativo', classificacao: 'Testando' };
  }

  itensTable: ItemTable[] = [
    {
      columnName: 'codigo',
      headerName: 'Código',
      percent: `8%`
    },
    {
      columnName: 'fantasia',
      headerName: 'Fantasia',
      percent: '21%'
    },
    {
      columnName: 'rzSocial',
      headerName: 'Razão Social',
      headerMobile: 'Razão S.',
      percent: '21%'
    },
    {
      columnName: 'cnpj',
      headerName: 'Cnpj',
      percent: '12%'
    },
    {
      columnName: 'telefone',
      headerName: 'Telefone',
      percent: '10%'
    },
    {
      columnName: 'celular',
      headerName: 'Celular',
      percent: '10%'
    },
    {
      columnName: 'situacao',
      headerName: 'situacao',
      percent: '8%'
    },
    {
      columnName: 'classificacao',
      headerName: 'Classificação',
      headerMobile: 'Classi.',
      percent: '10%'
    }
  ];
}
