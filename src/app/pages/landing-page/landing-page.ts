import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Player } from 'interfaces/player.interface';
import { GameManagerService } from 'models/services/game-manager.service';
import { PlayerService } from 'models/services/player.service';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  public readonly playerService: PlayerService = inject(PlayerService);
  public readonly gameManager: GameManagerService = inject(GameManagerService);
  public readonly router: Router = inject(Router);

  public initGameWithSavedPlayer(player: Player): void {
    this.gameManager.initGame(player);
    this.router.navigateByUrl('/game');
  }
}
