import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
	console.log(!!localStorage.getItem('token'));

  return !!localStorage.getItem('token');
};
