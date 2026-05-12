import { Component, input, output } from '@angular/core';

interface ZoneInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  difficulty: string;
  difficultyColor: string;
  minLevel: number;
  enemies: string;
}

@Component({
  selector: 'app-map-selector',
  imports: [],
  templateUrl: './map-selector.html',
  styleUrl: './map-selector.scss',
})
export class MapSelector {
  public readonly lvl = input.required<number>();
  public readonly zoneSelected = output<ZoneInfo>();

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
    },
  ];
}
