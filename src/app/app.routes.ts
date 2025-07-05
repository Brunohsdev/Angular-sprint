import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'home', component: Home},
    {path: 'dashboard', component: Dashboard},
];
