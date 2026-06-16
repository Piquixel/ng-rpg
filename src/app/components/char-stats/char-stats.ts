import { Component, input, InputSignal } from '@angular/core';
import { Character } from 'models/interfaces/character.interface';
import { InterfaceDigitsPipe } from '../../pipes/interface-digits-pipe';

@Component({
  selector: 'app-char-stats',
  imports: [InterfaceDigitsPipe],
  templateUrl: './char-stats.html',
  styleUrl: './char-stats.scss',
})
export class CharStats {
  public readonly guild: InputSignal<Character | undefined> = input<Character>();
}
