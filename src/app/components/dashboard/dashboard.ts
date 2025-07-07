import { Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterLink } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  imports: [
    Header,
    RouterLink,
    MatGridListModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
