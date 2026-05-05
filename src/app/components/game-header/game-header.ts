import { Component, inject, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Player } from 'interfaces/player.interface';

@Component({
  selector: 'app-game-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './game-header.html',
  styleUrl: './game-header.scss',
})
export class GameHeader {
  public readonly router = inject(Router);
  public readonly player = input.required<Player>();
}
