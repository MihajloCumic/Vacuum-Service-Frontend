import { Routes } from '@angular/router';
import { AddVacuumComponent } from './add-vacuum/add-vacuum.component';
import { VacuumPageComponent } from './vacuum-page/vacuum-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
    {path: 'add-vacuum', component: AddVacuumComponent},
    {path: 'vacuum-page', component: VacuumPageComponent},
    {path: 'error-page', component: ErrorPageComponent}
];
