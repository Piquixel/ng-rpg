import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { GameManagerService } from 'models/services/game-manager.service';

export const userInactiveGuard: CanActivateFn = (): true | UrlTree => {
  const manager: GameManagerService = inject(GameManagerService);
  const router: Router = inject(Router);

  return !manager.isInit ? true : router.createUrlTree(['/game']);
};
