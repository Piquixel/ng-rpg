import { Component, inject, input, InputSignal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Player } from 'interfaces/player.interface';

@Component({
  selector: 'app-game-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './game-header.html',
  styleUrl: './game-header.scss',
})
export class GameHeader {
  public readonly router: Router = inject(Router);
  public readonly player: InputSignal<Player> = input.required<Player>();
}
