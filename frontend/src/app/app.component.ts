import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HttpClientModule],
  template:`
    <div class="px-6 py-4 w-full bg-gray-900 flex gap-6 text-white">
        <a class="" routerLink="/">Home</a>
        <a class="" routerLink="/casier">Casiers</a>
        <a class="" routerLink="/rapport">Rapports</a>
        <a class="" routerLink="/plainte">Plaintes</a>
        <a class="" routerLink="/amendes">Amendes</a>
        <a class="" routerLink="/groupes">Groupes</a>
        <a class="" routerLink="/enquête">Enquête</a>
        <a class="" routerLink="/profil">Profil</a>
    </div>
      <router-outlet />
    `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard_panel';
}
