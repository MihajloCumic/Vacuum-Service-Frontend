import { Component } from '@angular/core';
import { VacuumTableComponent } from '../vacuum-table/vacuum-table.component';

@Component({
  selector: 'app-vacuum-page',
  standalone: true,
  imports: [VacuumTableComponent],
  templateUrl: './vacuum-page.component.html',
  styleUrl: './vacuum-page.component.css'
})
export class VacuumPageComponent {

}
