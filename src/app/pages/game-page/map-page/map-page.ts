import { Component } from '@angular/core';
import { PlayerStats } from 'components/player-stats/player-stats';

@Component({
  selector: 'app-map-page',
  imports: [PlayerStats],
  templateUrl: './map-page.html',
  styleUrl: './map-page.scss',
})
export class MapPage {}
