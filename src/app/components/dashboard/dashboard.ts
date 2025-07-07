import { Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Header,
    RouterLink
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
