import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HttpClientModule, FormsModule],
  template:`
    <router-outlet />
    `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard_panel';

  constructor(private authService: AuthService) {}
}
