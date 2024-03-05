import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  private apiUrl = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }
  
  getAllCasiers(): Observable<any[]> {
    
    return this.http.get<any[]>(`${this.apiUrl}/cases`)
  }
  
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
