import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navLinks: NavLink[] = [
    { label: 'Home', route: '/' },
    { label: 'Casiers', route: '/casier' },
    { label: 'Rapports', route: '/rapport' },
    { label: 'Plaintes', route: '/plainte' },
    { label: 'Amendes', route: '/amendes' },
    { label: 'Groupes', route: '/groupes' },
    { label: 'Enquête', route: '/enquête' },
    { label: 'Profil', route: '/profil' }
  ];
}

interface NavLink {
  label: string;
  route: string;
}
