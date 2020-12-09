import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atendimento } from './atendimento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  create( coordenador : string, assunto : string, description: string,  data : string, ): Observable<Atendimento> {
    return this.httpClient.post<Atendimento>(`${this.URL}/atendimento`, { coordenador, assunto , description, data });
  }

  update(atendimento: Atendimento): Observable<Atendimento[]> {
    return this.httpClient.put<Atendimento[]>(`${this.URL}/atendimento`, atendimento);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.URL}/atendimento/${id}`);
  }

  findAll(): Observable<Atendimento[]> {
    return this.httpClient.get<Atendimento[]>(`${this.URL}/atendimento`);
  }

}
