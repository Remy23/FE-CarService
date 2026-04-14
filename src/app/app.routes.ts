import { Routes } from '@angular/router';
//import { AppComponent } from './home/app.component'; // Tu home actual
//import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { AsesorComponent } from './asesor/asesor.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta inicial (Home)
  { path: 'registro', component: RegistroComponent },
  { path: 'asesor', component: AsesorComponent },
  { path: 'dashboard', component: DashboardComponent },
];