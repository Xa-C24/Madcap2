import { Routes } from '@angular/router';
import { DonComponent } from './components/don/don.component';

export const routes: Routes = [
  { path: '', component: DonComponent }, // Page d'accueil (temporairement la page Don)
  { path: 'don', component: DonComponent }
];
