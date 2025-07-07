import { ChangeDetectionStrategy,Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    Header,
    MatButtonModule,
    MatCardModule
],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
