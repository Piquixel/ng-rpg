import { Routes } from '@angular/router';
import { CreateCharacterPage } from 'pages/create-character-page/create-character-page';
import { LandingPage } from 'pages/landing-page/landing-page';

export const routes: Routes = [
  { path: 'landing', title: 'Tails of Angular', component: LandingPage },
  {
    path: 'create-character',
    title: 'Tails of Angular | New Character',
    component: CreateCharacterPage,
  },
  { path: '**', redirectTo: 'landing' },
];
