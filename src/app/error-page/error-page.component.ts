import { Component, OnInit } from '@angular/core';
import { ErrorMessage } from '../models/VacuumModel';
import { VacuumService } from '../vacuum.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit{
  public errors: ErrorMessage[] = [];

  constructor(private vacuumService: VacuumService){}

  ngOnInit(): void {
    this.refresh();
  }

  refresh():void{
    this.vacuumService.getErrorMessages().subscribe(
      (res)=> {
        this.errors = res;
          console.log(this.errors);
          },
      (err) => alert('Could not load errors.')
    )
  }

}
