import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VacuumService } from '../vacuum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vacuum',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-vacuum.component.html',
  styleUrl: './add-vacuum.component.css'
})
export class AddVacuumComponent {
  public vacuumName: string = '';

  constructor(private vacuumService: VacuumService, private router: Router){}

  addVacuum():void{
    this.vacuumService.addVacuum(this.vacuumName).subscribe(
      (res) => {
        alert(`Added vacuum: ${res.name}.`)
        this.router.navigate(['/vacuum-page']);
      },
      (err) => alert("Could not add vacuum.")
    )
  }
}
