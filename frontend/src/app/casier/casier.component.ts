import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatabaseService } from '../services/database.service.spec';

@Component({
  selector: 'app-casier',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './casier.component.html',
  styleUrl: './casier.component.scss'
})
export class CasierComponent implements OnInit{

  constructor(private databaseService: DatabaseService) { }


  ngOnInit(): void {
    this.getAllcasier();
  }

  getAllcasier() {
    this.databaseService.getAllCasiers().subscribe(
      (casiers: any) => {
        console.log(casiers);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}