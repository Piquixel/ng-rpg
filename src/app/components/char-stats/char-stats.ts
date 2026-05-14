import { Component, input, InputSignal } from '@angular/core';
import { Character } from 'models/interfaces/character.interface';

@Component({
  selector: 'app-char-stats',
  imports: [],
  templateUrl: './char-stats.html',
  styleUrl: './char-stats.scss',
})
export class CharStats {
  public readonly guild: InputSignal<Character> = input.required<Character>();
}
