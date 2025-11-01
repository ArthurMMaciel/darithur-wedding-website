import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/api.config';

export interface Guest {
  id: number;
  name: string;
  confirmed: boolean;
  email: string;
  phoneNumber: string;
  groupCode: string;
}

export interface GuestsToConfirmDto {
  guestsToConfirmIds: string; 
  guestHeaderEmail: string;
  guestHeaderPhone: string;
  guestHeaderName: string;
}

@Injectable({ providedIn: 'root' })
export class GuestService {
  private readonly apiBase = API_BASE_URL;

  constructor(private http: HttpClient) {}

  public getAllNonConfirmed(): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.apiBase}/guests/get-all-non-confirmed-guests`);
  }

  public searchNonConfirmedByName(name: string): Observable<Guest[]> {
    const params = new HttpParams().set('name', name);
    return this.http.get<Guest[]>(`${this.apiBase}/guests/search-non-confirmed`, { params });
  }

  public findAllNonConfirmedByGroupCode(groupCode: string): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.apiBase}/guests/find-all-non-confirmed-guests-by-group-code/${encodeURIComponent(groupCode)}`);
  }

  public confirmPresence(payload: GuestsToConfirmDto): Observable<void> {
    return this.http.post<void>(`${this.apiBase}/guests/confirm-presence`, payload);
  }
}
