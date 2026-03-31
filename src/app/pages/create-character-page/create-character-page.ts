import { Component } from '@angular/core';
import { ICharacter } from 'models/character.interface';
import { USER_CHOICES_CLASS } from '../../data/class.data';

@Component({
  selector: 'app-create-character-page',
  imports: [],
  templateUrl: './create-character-page.html',
  styleUrl: './create-character-page.scss',
})
export class CreateCharacterPage {
  public selectedGuild: ICharacter | null = null;
  public readonly data: ICharacter[] = USER_CHOICES_CLASS;
  public selectClass(guild: ICharacter): void {
    this.selectedGuild = guild ?? null;
  }
}
