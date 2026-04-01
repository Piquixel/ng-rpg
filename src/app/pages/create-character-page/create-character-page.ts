import { Component } from '@angular/core';
import { CharacterCard } from 'components/character-card/character-card';
import { USER_CHOICES_CLASS } from 'data/class.data';
import { ICharacter } from 'models/interfaces/character.interface';

@Component({
  selector: 'app-create-character-page',
  imports: [CharacterCard],
  templateUrl: './create-character-page.html',
  styleUrl: './create-character-page.scss',
})
export class CreateCharacterPage {
  public selectedGuild?: ICharacter;
  public readonly data: ICharacter[] = USER_CHOICES_CLASS;
  public selectGuild(guild: ICharacter): void {
    this.selectedGuild = this.selectedGuild !== guild ? guild : undefined;
  }
}
