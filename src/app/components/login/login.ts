
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

/** @title Form field with prefix & suffix */
@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrl: 'login.css',
  imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        FormsModule
      ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Login {
  hide = signal(true);
  usuario:string = '';
  senha:string = '';
  nome_correto = 'admin';
  senha_correta = '123456';
  button_enviar = document.querySelector('.button_enviar') as HTMLButtonElement;
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  login() {
    //parte que da pra melhorar
    let textoDeErro = `Nome de usuário ou senha incorretos.`;
    let erro = document.querySelector('.erro') as HTMLElement;
    erro.textContent = `*Falha no login: ${textoDeErro}`; // Exibe a mensagem de erro
    this.button_enviar.disabled = false;
    // if(this.usuario && this.senha) {
    //   this.button_enviar.disabled = false; // Desabilita o botão enquanto processa o login
    // }
    // // Verifica se o nome de usuário e a senha estão corretos
    if (this.usuario === this.nome_correto && this.senha === this.senha_correta) {
      console.log('Login bem-sucedido!');
      alert("deu certo!");
      // Redirecionar ou realizar outras ações após o login bem-sucedido
    } 
    else {
      console.log('Nome de usuário ou senha incorretos.');
      alert("deu errado!");
      // Exibir mensagem de erro ou realizar outras ações em caso de falha
    }
  }

}
