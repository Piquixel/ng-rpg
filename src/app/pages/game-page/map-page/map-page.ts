import { Component, inject } from '@angular/core';
import { PlayerStats } from 'components/player-stats/player-stats';
import { GameManagerService } from 'models/services/game-manager.service';

@Component({
  selector: 'app-map-page',
  imports: [PlayerStats],
  templateUrl: './map-page.html',
  styleUrl: './map-page.scss',
})
export class MapPage {
  public gameManager = inject(GameManagerService);
}
