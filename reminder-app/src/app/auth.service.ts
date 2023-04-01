import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());
  loggedIn$ = this.loggedIn.asObservable();

  constructor() {}

  login(email: string, password: string): boolean {
    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('loggedIn', 'true');
      this.loggedIn.next(true);
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    this.loggedIn.next(false);
  }
}
