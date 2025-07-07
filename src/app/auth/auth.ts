import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly VALID_USERNAME = 'admin';
  private readonly VALID_PASSWORD = '123456';

  login(username: string, password: string): boolean {
    return username === this.VALID_USERNAME && password === this.VALID_PASSWORD;
  }

  logout(): void {
    // Aqui você poderia limpar o token ou informações de sessão futuramente
  }

  isLoggedIn(): boolean {
    // Para usar depois com guarda de rotas ou sessão
    return false;
  }
}
