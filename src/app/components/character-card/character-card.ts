import { Component, input, output } from '@angular/core';
import { CharStats } from 'components/char-stats/char-stats';
import { ICharacter } from 'models/interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  imports: [CharStats],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss',
})
export class CharacterCard {
  public readonly isSelected = input.required<boolean>();
  public readonly guild = input.required<ICharacter>();
  public readonly pick = output();
}
