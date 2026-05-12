import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CharacterCard } from 'components/character-card/character-card';
import { USER_CHOICES_CLASS } from 'data/class.data';
import { Player } from 'interfaces/player.interface';
import { ICharacter } from 'models/interfaces/character.interface';
import { GameManagerService } from 'models/services/game-manager.service';
import { PlayerService } from 'models/services/player.service';

@Component({
  selector: 'app-create-character-page',
  imports: [CharacterCard, ReactiveFormsModule, RouterLink],
  templateUrl: './create-character-page.html',
  styleUrl: './create-character-page.scss',
})
export class CreateCharacterPage {
  public readonly rooter = inject(Router);
  private readonly _playerService: PlayerService = inject(PlayerService);
  public readonly gameManager = inject(GameManagerService);
  public selectedGuild?: ICharacter;
  public readonly data: ICharacter[] = USER_CHOICES_CLASS;
  public charName = new FormControl('', Validators.required);
  public pickGuild(guild: ICharacter): void {
    this.selectedGuild = this.selectedGuild !== guild ? guild : undefined;
  }

  public createCharacter() {
    if (this.charName.valid && this.selectedGuild) {
      const player: Player = {
        ...this.selectedGuild,
        nickname: this.charName.value!,
        lvl: 1,
        currentXP: 0,
        currentHP: this.selectedGuild.characteristics.hp,
        currentMP: this.selectedGuild.characteristics.mana,
        money: 50,
      };

      this._playerService.add(player);
      this.initGameWithNewUser(player.nickname);
      this.rooter.navigateByUrl('/map');
    }
  }

  private initGameWithNewUser(playerPseudo: string) {
    const player = this._playerService.getUserByName(playerPseudo);
    if (player) {
      this.gameManager.initGame(player);
    }
  }
}
