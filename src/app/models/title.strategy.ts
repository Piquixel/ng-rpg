import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  private readonly title: Title = inject(Title);

  updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle: string = this.buildTitle(snapshot) || this.title.getTitle();
    this.title.setTitle(`Tails of Angular | ${pageTitle}`);
  }
}
