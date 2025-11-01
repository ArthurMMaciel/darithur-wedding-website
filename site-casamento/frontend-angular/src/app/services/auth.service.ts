import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

type LoginPayload = { username: string; password: string };
type RegisterPayload = { username: string; password: string };

// Ajuste a base de URL conforme seu backend
const API_BASE = '/api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private storageKey = 'auth_user';

  login(payload: LoginPayload): Observable<any> {
    return this.http
      .post(`${API_BASE}/auth/login`, payload)
      .pipe(tap(() => this.setAuthenticated(payload.username)));
  }

  register(payload: RegisterPayload): Observable<any> {
    return this.http
      .post(`${API_BASE}/auth/register`, payload)
      .pipe(tap(() => this.setAuthenticated(payload.username)));
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  getCurrentUser(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  private setAuthenticated(username: string): void {
    localStorage.setItem(this.storageKey, username);
  }
}

