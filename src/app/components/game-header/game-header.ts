import { TitleCasePipe } from '@angular/common';
import { Component, inject, input, InputSignal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Player } from 'interfaces/player.interface';

interface LinkMapper {
  icon: string;
  link: string;
}

@Component({
  selector: 'app-game-header',
  imports: [RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './game-header.html',
  styleUrl: './game-header.scss',
})
export class GameHeader {
  public readonly router: Router = inject(Router);
  public readonly player: InputSignal<Player> = input.required<Player>();

  public readonly links: LinkMapper[] = [
    { icon: '🗺️', link: 'map' },
    { icon: '🏢', link: 'city' },
    { icon: '🎒', link: 'inventory' },
  ];
}
