import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaListagem } from './contaListagem';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  protected Url: string = "/api/lancamentos-contabeis";
  constructor(private http: HttpClient) {

  }

  obterContas(): Observable<ContaListagem[]> {
    return this.http.get<ContaListagem[]>(this.Url)
  }

  
}