import { Component, input } from '@angular/core';
import { ICharacter } from 'models/interfaces/character.interface';

@Component({
  selector: 'app-char-stats',
  imports: [],
  templateUrl: './char-stats.html',
  styleUrl: './char-stats.scss',
})
export class CharStats {
  public readonly guild = input<ICharacter>();
}
