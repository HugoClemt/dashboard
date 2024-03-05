import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatabaseService } from '../services/database.service.spec';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-casier',
    standalone: true,
    templateUrl: './casier.component.html',
    styleUrl: './casier.component.scss',
    imports: [RouterModule, CommonModule, NavbarComponent]
})
export class CasierComponent implements OnInit{
  casiers: any[] = [];

  constructor(private databaseService: DatabaseService) { }


  ngOnInit(): void {
    this.getAllcasier();
  }

  getAllcasier() {
    this.databaseService.getAllCasiers().subscribe(
      (casiers: any[]) => {
        console.log(casiers);
        this.casiers = casiers;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}