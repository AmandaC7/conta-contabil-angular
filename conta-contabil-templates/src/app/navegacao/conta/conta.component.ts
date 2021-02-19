import { Component, OnInit } from '@angular/core';
import { ContaListagem } from './contaListagem';
import { ContaService } from './ContaService.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html'
  
})
export class ContaComponent implements OnInit {

  private ELEMENT_DATA: ContaListagem[];
  displayedColumns: string[] = ['Id', 'valor', 'data'];

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  constructor(private service : ContaService ) {
   }

   public contas: ContaListagem[];

  ngOnInit(): void {

    this.service.obterContas()
    .subscribe(
      contas => {
        this.contas = contas;
      }
    )

    this.fetchPosts();

  }

  fetchPosts(): void {
    this.service.obterContas()
      .subscribe(
        response => {
          this.contas = response;
          console.log(response);
        },
        error => {
          console.log(error);
        }); 
  }

}

