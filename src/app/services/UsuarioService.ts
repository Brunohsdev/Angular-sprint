import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }
  
  login(nome: string, senha: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/login`, { nome, senha });
  }
}
 