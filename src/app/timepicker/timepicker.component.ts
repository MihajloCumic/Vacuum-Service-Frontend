import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [NgbTimepickerModule, FormsModule],
  templateUrl: './timepicker.component.html',
  styleUrl: './timepicker.component.css'
})
export class TimepickerComponent {
  time = { hour: 13, minute: 30 };
}
