import { TitleCasePipe } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { IconByClass } from 'enums/class-type.enum';
import { Player } from 'interfaces/player.interface';
import { InterfaceDigitsPipe } from "../../pipes/interface-digits-pipe";

@Component({
  selector: 'app-player-stats',
  imports: [TitleCasePipe, InterfaceDigitsPipe],
  templateUrl: './player-stats.html',
  styleUrl: './player-stats.scss',
})
export class PlayerStats {
  public readonly player: InputSignal<Player> = input.required<Player>();

  public readonly iconByClass = IconByClass;
}
