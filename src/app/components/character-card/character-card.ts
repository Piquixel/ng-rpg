import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { Character } from 'interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss',
})
export class CharacterCard {
  public readonly isSelected: InputSignal<boolean> = input.required<boolean>();
  public readonly guild: InputSignal<Character> = input.required<Character>();
  public readonly cardSelect: OutputEmitterRef<void> = output();
}
