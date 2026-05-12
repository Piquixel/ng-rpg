import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GameManagerService } from 'models/services/game-manager.service';

export const userInactiveGuard: CanActivateFn = () => {
  const manager = inject(GameManagerService);
  const router = inject(Router);

  return !manager.isInit ? true : router.createUrlTree(['/game']);
};
