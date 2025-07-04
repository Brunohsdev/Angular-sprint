import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    Login,
    Dashboard
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'projeto--desafio-angular';
}
