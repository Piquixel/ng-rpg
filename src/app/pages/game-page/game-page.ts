import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameHeader } from 'components/game-header/game-header';

@Component({
  selector: 'app-game',
  imports: [RouterOutlet, GameHeader],
  templateUrl: './game-page.html',
  styleUrl: './game-page.scss',
})
export class GamePage {}
