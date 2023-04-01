import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Reminder {
  id?: number;
  title: string;
  description?: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  private apiUrl = 'http://localhost:3000/api';

  reminders: Reminder[] = [
    { id: 1, title: 'Rappel 1', date: new Date(), description: 'Description du rappel 1' },
    { id: 2, title: 'Rappel 2', date: new Date(), description: 'Description du rappel 2' }
  ];

  constructor(private http: HttpClient) { }

  getReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${this.apiUrl}/reminders`);
  }
  
  addReminder(reminder: Reminder): Observable<Reminder> {
    return this.http.post<Reminder>(`${this.apiUrl}/reminders`, reminder);
  }
  
  deleteReminder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reminders/${id}`);
  }
}
