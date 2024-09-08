import { CanActivateFn, Router } from '@angular/router';

export const canAddVacuumsGuard: CanActivateFn = (route, state) => {
  const authorization = localStorage.getItem('authorization');

    if (authorization && authorization.includes('can_add_vacuums')) {
      return true;
    }
    alert("unathorized")
    return false;
};
