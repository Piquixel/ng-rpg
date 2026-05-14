import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CharacterCard } from 'components/character-card/character-card';
import { USER_CHOICES_CLASS } from 'data/class.data';
import { Player } from 'interfaces/player.interface';
import { Character } from 'models/interfaces/character.interface';
import { GameManagerService } from 'models/services/game-manager.service';
import { PlayerService } from 'models/services/player.service';

@Component({
  selector: 'app-create-character-page',
  imports: [CharacterCard, ReactiveFormsModule, RouterLink],
  templateUrl: './create-character-page.html',
  styleUrl: './create-character-page.scss',
})
export class CreateCharacterPage {
  public readonly rooter: Router = inject(Router);
  private readonly _player: PlayerService = inject(PlayerService);
  public readonly gameManager: GameManagerService = inject(GameManagerService);
  public selectedGuild?: Character;
  public readonly guildChoices: Character[] = USER_CHOICES_CLASS;
  public charName: FormControl<string | null> = new FormControl<string | null>(
    '',
    Validators.required,
  );
  public pickGuild(guild: Character): void {
    this.selectedGuild = this.selectedGuild !== guild ? guild : undefined;
  }

  public createCharacter(): void {
    if (this.charName.valid && this.selectedGuild) {
      const player: Player = {
        ...this.selectedGuild,
        nickname: this.charName.value!,
        lvl: 1,
        currentXp: 0,
        currentHp: this.selectedGuild.characteristics.hp,
        currentMp: this.selectedGuild.characteristics.mana,
        money: 50,
      };

      this._player.add(player);
      this.initGameWithNewUser(player.nickname);
      this.rooter.navigateByUrl('/map');
    }
  }

  private initGameWithNewUser(playerName: string): void {
    const player: Player | undefined = this._player.getPlayerByName(playerName);
    if (player) {
      this.gameManager.initGame(player);
    }
  }
}
