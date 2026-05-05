import { Routes } from '@angular/router';
import { CreateCharacterPage } from 'pages/create-character-page/create-character-page';
import { CityPage } from 'pages/game-page/city-page/city-page';
import { GamePage } from 'pages/game-page/game-page';
import { InventoryPage } from 'pages/game-page/inventory-page/inventory-page';
import { MapPage } from 'pages/game-page/map-page/map-page';
import { LandingPage } from 'pages/landing-page/landing-page';

export const routes: Routes = [
  { path: 'landing', title: 'Home', component: LandingPage },
  {
    path: 'create-character',
    title: 'New Character',
    component: CreateCharacterPage,
  },
  {
    path: 'game/:nickname',
    component: GamePage,
    children: [
      { path: 'map', title: 'Carte', component: MapPage },
      { path: 'city', title: 'Ville', component: CityPage },
      { path: 'inventory', title: 'Inventaire', component: InventoryPage },
    ],
  },
  { path: '**', redirectTo: 'landing' },
];
