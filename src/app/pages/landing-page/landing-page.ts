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
  public readonly playerService = inject(PlayerService);
  public readonly gameManager = inject(GameManagerService);
  public readonly router = inject(Router);

  public initGameWithSavedPlayer(player: Player) {
    this.gameManager.initGame(player);
    this.router.navigateByUrl('/game');
  }
}
