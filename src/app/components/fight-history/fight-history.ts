import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LogEntry } from 'interfaces/log-entry.interface';
import { LogEntryService } from 'models/services/log-entry.service';

@Component({
  selector: 'app-fight-history',
  imports: [DatePipe],
  templateUrl: './fight-history.html',
  styleUrl: './fight-history.scss',
})
export class FightHistory {
  private logService = inject(LogEntryService);
  public readonly entries: LogEntry[] = this.logService.logEntries;

  constructor() {
    console.log(this.entries);
  }
}
