import { Component, inject, ViewChild } from '@angular/core';
import { VacuumTableComponent } from '../vacuum-table/vacuum-table.component';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { TimepickerComponent } from '../timepicker/timepicker.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-vacuum-page',
  standalone: true,
  imports: [VacuumTableComponent, TimepickerComponent, DatepickerComponent,NgbDatepickerModule, FormsModule, JsonPipe, CommonModule],
  templateUrl: './vacuum-page.component.html',
  styleUrl: './vacuum-page.component.css'
})
export class VacuumPageComponent {
    public name: string = '';
    public search = false;
    public isRunning = false;
    public isStopped = false;
    public isDischarged = false;
    @ViewChild('datePickerFrom') datepickerFrom!: DatepickerComponent;
    @ViewChild('timePickerFrom') timepickerFrom!: TimepickerComponent;
    @ViewChild('datePickerTo') datepickerTo!: DatepickerComponent;
    @ViewChild('timePickerTo') timepickerTo!: TimepickerComponent;
    @ViewChild(VacuumTableComponent) vacuumTableComponent!: VacuumTableComponent;  

    showSearch():void{
        this.search = true;
    }
    closeSearch():void{
      this.name = '';
      this.isDischarged = false;
      this.isRunning = false;
      this.isStopped = false;
      this.search = false;
    }

    canSearchVacuums():boolean{
      return !!localStorage
      .getItem('authorization')
      ?.includes('can_search_vacuums');
    }

    searchVacuums():void{
      const params: { [key: string]: any } = {};
      params['name'] = this.name;
      const statuses: string[] = [];
      if(this.isDischarged) statuses.push("DISCHARGING");
      if(this.isStopped) statuses.push("STOPPED");
      if(this.isRunning) statuses.push("RUNNING");
      params['statuses'] = statuses;
      if(this.datepickerFrom.model !== undefined && this.datepickerTo.model !== undefined){
          let year = this.datepickerFrom.model.year;
          let month = this.datepickerFrom.model.month;
          let day = this.datepickerFrom.model.day;
          let hour = this.timepickerFrom.time.hour;
          let minute = this.timepickerFrom.time.minute;
          const fromEpoch = new Date(year, month - 1, day, hour, minute).getTime();

          params['dateFrom'] = fromEpoch;

          let yearTo = this.datepickerTo.model.year;
          let monthTo = this.datepickerTo.model.month;
          let dayTo = this.datepickerTo.model.day;
          let hourTo = this.timepickerTo.time.hour;
          let minuteTo = this.timepickerTo.time.minute;
          const toEpoch = new Date(yearTo, monthTo - 1, dayTo, hourTo, minuteTo).getTime();

          params['dateTo'] = toEpoch;
      }else if((this.datepickerFrom.model === undefined && this.datepickerTo.model !== undefined) || 
      (this.datepickerFrom.model !== undefined && this.datepickerTo.model === undefined) ){
        alert("If from or to are selected then both must be selected.");
        this.name = '';
        this.isDischarged = false;
        this.isRunning = false;
        this.isStopped = false;
        return;
      }
      this.vacuumTableComponent.searchVacuums(params);
    }
    
}
