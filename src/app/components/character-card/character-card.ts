import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { CharStats } from 'components/char-stats/char-stats';
import { Character } from 'interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  imports: [CharStats],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss',
})
export class CharacterCard {
  public readonly isSelected: InputSignal<boolean> = input.required<boolean>();
  public readonly guild: InputSignal<Character> = input.required<Character>();
  public readonly cardSelect: OutputEmitterRef<void> = output();
}
