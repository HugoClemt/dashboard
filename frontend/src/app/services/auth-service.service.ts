import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';

  private isAuthenticated = false;

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log('Utilisateur connecté:', response.user);
        } else {
          console.error('Token non valide dans la réponse.');
        }
      }),
      catchError(error => {
        console.error('Erreur lors de la connexion:', error);
        return of(null);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }

  isAuthenticatedUser() {
    return !!localStorage.getItem('token');
  }
}
