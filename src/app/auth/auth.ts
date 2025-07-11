import { Injectable, signal } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/UsuarioService';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated = signal(false);
  userData = signal<Usuario | null>(null);

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  login(nome: string, senha: string) {
    return this.usuarioService.login(nome, senha);
  }

  logout() {
    this.isAuthenticated.set(false);
    this.userData.set(null);
    this.router.navigate(['/login']);
  }
}
