import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { ZoneMap } from 'enums/zones.enum';

export interface ZoneInfo {
  description: string;
  difficulty: string;
  difficultyColor: string;
  enemies: string;
  zone: ZoneMap;
  icon: string;
  id: string;
  minLevel: number;
  name: string;
}

@Component({
  selector: 'app-map-selector',
  imports: [],
  templateUrl: './map-selector.html',
  styleUrl: './map-selector.scss',
})
export class MapSelector {
  public readonly lvl: InputSignal<number> = input.required<number>();
  public readonly zoneSelected: OutputEmitterRef<ZoneInfo> = output<ZoneInfo>();

  public readonly zones: ZoneInfo[] = [
    {
      id: 'forest',
      name: 'Shadow Forest',
      description: 'A mysterious forest inhabited by wild creatures.',
      difficulty: 'easy',
      difficultyColor: '#2db22b',
      enemies: 'Wolves, Goblins, Trolls',
      icon: '🌲',
      minLevel: 1,
      zone: ZoneMap.FOREST,
    },
    {
      id: 'donjon',
      description: 'A dark donjon, home of living deads and black mages.',
      difficulty: 'medium',
      difficultyColor: '#fbec5d',
      enemies: 'Skeletons, Dark Mages, Lich',
      icon: '🏚️',
      minLevel: 3,
      name: 'Cursed Donjon',
      zone: ZoneMap.DUNGEON,
    },
    {
      description: 'Dangerous mountain inhabited by legendary creatures.',
      difficulty: 'hard',
      difficultyColor: '#cd5c5c',
      enemies: 'Harpy, Golems, Dragon',
      icon: '🏔️',
      id: 'mountain',
      minLevel: 5,
      name: 'Chaos Mountain',
      zone: ZoneMap.MOUNTAIN,
    },
  ];
}
