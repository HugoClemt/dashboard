import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe(
      (response) => {
        console.log('Connexion réussie ! Token JWT reçu :', response.token);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erreur lors de la connexion:', error);
      }
    );
  }
}
