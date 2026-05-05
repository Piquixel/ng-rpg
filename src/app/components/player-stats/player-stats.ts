import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { IconByClass } from 'enums/class-type.enum';
import { Player } from 'interfaces/player.interface';

@Component({
  selector: 'app-player-stats',
  imports: [TitleCasePipe],
  templateUrl: './player-stats.html',
  styleUrl: './player-stats.scss',
})
export class PlayerStats {
  public readonly player = input.required<Player>();

  public readonly iconByClass = IconByClass;
}
