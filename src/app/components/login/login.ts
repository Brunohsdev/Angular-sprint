import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthService } from '../../auth/auth';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario.model';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrl: 'login.css',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  usuario: string = '';
  senha: string = '';
  hide = signal(true);
  loginError = signal(false);

  constructor(
    private auth: AuthService,
    private router: Router, ) {}

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login(): void {
    this.auth.login(this.usuario, this.senha).subscribe({
      next: (res: Usuario) => {
        this.auth.isAuthenticated.set(true);
        this.auth.userData.set(res);
        this.loginError.set(false);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
        this.loginError.set(true);
      }
    });
  }
}
