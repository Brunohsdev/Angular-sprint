import { Component } from '@angular/core';
import { Header } from "../header/header";
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dashboard',
  imports: [
    Header,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard {

}
