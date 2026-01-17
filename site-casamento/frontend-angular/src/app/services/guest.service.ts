import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../config/supabase.config';

export interface Guest {
  id: number;
  name: string;
  confirmed: boolean;
  group_code: string;
}

@Injectable({ providedIn: 'root' })
export class GuestService {
  private readonly restBase: string;
  private readonly functionsBase: string;
  private readonly headers: HttpHeaders;

  constructor(private http: HttpClient) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error('Missing Supabase config (NG_APP_SUPABASE_URL / NG_APP_SUPABASE_ANON_KEY).');
    }
    this.restBase = `${SUPABASE_URL}/rest/v1`;
    this.functionsBase = `${SUPABASE_URL}/functions/v1`;
    this.headers = new HttpHeaders({
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`
    });
  }

  public getAllNonConfirmed(): Observable<Guest[]> {
    const params = new HttpParams()
      .set('select', '*')
      .set('order', 'name.asc');
    return this.http.get<Guest[]>(`${this.restBase}/guest`, { headers: this.headers, params });
  }

  public searchNonConfirmedByName(name: string): Observable<Guest[]> {
    const params = new HttpParams()
      .set('select', '*')
      .set('order', 'name.asc')
      .set('name', `ilike.*${name}*`);
    return this.http.get<Guest[]>(`${this.restBase}/guest`, { headers: this.headers, params });
  }

  public findAllNonConfirmedByGroupCode(groupCode: string): Observable<Guest[]> {
    const params = new HttpParams()
      .set('select', '*')
      .set('order', 'name.asc')
      .set('group_code', `eq.${groupCode}`);
    return this.http.get<Guest[]>(`${this.restBase}/guest`, { headers: this.headers, params });
  }

  public confirmPresence(guestIds: number[]): Observable<void> {
    return this.http.post<void>(`${this.functionsBase}/confirm-presence`, { guestIds }, { headers: this.headers });
  }
}
