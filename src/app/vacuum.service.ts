import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacuum } from './models/VacuumModel';

@Injectable({
  providedIn: 'root'
})
export class VacuumService {
  private readonly vacuumUrl: string = 'http://localhost:8080/api/vacuum';

  constructor(private httpClient: HttpClient) { }

  getVacuums(): Observable<Vacuum[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.get<Vacuum[]>(this.vacuumUrl + '/get-all', {
      headers,
    });
  }

}
