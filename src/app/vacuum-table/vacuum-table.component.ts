import { Component, OnInit } from '@angular/core';
import { Vacuum } from '../models/VacuumModel';
import { VacuumService } from '../vacuum.service';

@Component({
  selector: 'app-vacuum-table',
  standalone: true,
  imports: [],
  templateUrl: './vacuum-table.component.html',
  styleUrl: './vacuum-table.component.css'
})
export class VacuumTableComponent implements OnInit{
  public vacuums: Vacuum[] = [];
  constructor(private vacuumService: VacuumService){}

  ngOnInit(): void {
    this.vacuumService.getVacuums().subscribe(
      (res) => this.vacuums = res,
      (err) => alert('Error fetching vacuums.')
    );
  }
}
