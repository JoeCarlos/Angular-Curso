import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

	doLogin(username: string, password: string): boolean {
		localStorage.setItem('token', 'vssdfgsdfgsdfg');
		return true;
	}
	doLogout(): void {
		localStorage.clear();
	}
}
