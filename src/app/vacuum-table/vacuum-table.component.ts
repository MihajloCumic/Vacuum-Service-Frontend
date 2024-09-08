import { Component, OnInit } from '@angular/core';
import { Vacuum } from '../models/VacuumModel';
import { VacuumService } from '../vacuum.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-vacuum-table',
  standalone: true,
  imports: [DatePipe, CommonModule],
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

  refresh(): void{
    this.vacuumService.getVacuums().subscribe(
      (res) => this.vacuums = res,
      (err) => alert('Error fetching vacuums.')
    );
  }

  startVacuum(id:number):void{
    this.vacuumService.startVacuum(id).subscribe(
      (res) => alert(`Starting vacuum: ${id} will begin.`),
      (err) => alert("Could not start vacuum.")
    )
  }
  stopVacuum(id:number):void{
    this.vacuumService.stopVacuum(id).subscribe(
      (res) => alert(`Stopping vacuum: ${id} will begin.`),
      (err) => alert("Could not stop vacuum.")
    )
  }
  dischargeVacuum(id:number):void{
    this.vacuumService.dischargeVacuum(id).subscribe(
      (res) => alert(`Discharging vacuum: ${id} will begin.`),
      (err) => alert("Could not discharge vacuum.")
    )
  }
  removeVacuum(id:number):void{
    this.vacuumService.removeVacuum(id).subscribe(
      (res) => {
        alert(`Removed vacuum: ${id}.`)
        this.refresh();
      },
      (err) => alert("Could not remove vacuum.")
    )
  }

  searchVacuums(params: object):void{
    this.vacuumService.searchVacuums(params).subscribe(
      (res) => this.vacuums = res,
      (err) => alert("Error.")
    );
  }

  canStartVacuums(): boolean{
    return !!localStorage
      .getItem('authorization')
      ?.includes('can_start_vacuums');
  }

  canStopVacuums(): boolean{
    return !!localStorage
      .getItem('authorization')
      ?.includes('can_stop_vacuums');
  }

  canDischargeVacuums(): boolean{
    return !!localStorage
      .getItem('authorization')
      ?.includes('can_discharge_vacuums');
  }

  canRemoveVacuums(): boolean{
    return !!localStorage
      .getItem('authorization')
      ?.includes('can_remove_vacuums');
  }
}
