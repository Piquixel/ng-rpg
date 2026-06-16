import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

type LogKind = 'system' | 'player' | 'enemy' | 'heal' | 'info';

interface LogEntry {
  kind: LogKind;
  icon: string;
  text: string;
  time: Date;
}

@Component({
  selector: 'app-fight-history',
  imports: [DatePipe],
  templateUrl: './fight-history.html',
  styleUrl: './fight-history.scss',
})
export class FightHistory {
  public readonly entries = input<LogEntry[]>();
}
