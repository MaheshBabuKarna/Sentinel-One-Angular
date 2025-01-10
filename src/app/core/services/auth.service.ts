import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    // Mock login logic
    if (username === 'admin' && password === 'admin') {
      return of(true);
    } else {
      return of(false);
    }
  }
}