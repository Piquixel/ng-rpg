import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MapSelector, ZoneInfo } from 'components/map-selector/map-selector';
import { PlayerStats } from 'components/player-stats/player-stats';
import { GameManagerService } from 'models/services/game-manager.service';

@Component({
  selector: 'app-map-page',
  imports: [PlayerStats, MapSelector],
  templateUrl: './map-page.html',
  styleUrl: './map-page.scss',
})
export class MapPage {
  public gameManager: GameManagerService = inject(GameManagerService);
  public readonly router: Router = inject(Router);
  public redirectToFight(event: ZoneInfo): void {
    this.router.navigateByUrl('/game/combat/' + event.zone);
  }
}
