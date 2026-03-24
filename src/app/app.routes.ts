import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';

export const routes: Routes = [
  { path: 'landing', component: LandingPage },
  { path: '**', redirectTo: 'landing' },
];
