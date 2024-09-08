import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorMessage, Vacuum } from './models/VacuumModel';

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

  addVacuum(name:string): Observable<Vacuum>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.post<Vacuum>(this.vacuumUrl + '/add', {name},{
      headers,
    });
  }

  startVacuum(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.post(`${this.vacuumUrl}/start/${id}`,{},{
      headers,
    });
  }

  stopVacuum(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.post(`${this.vacuumUrl}/stop/${id}`,{},{
      headers,
    });
  }

  dischargeVacuum(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.post(`${this.vacuumUrl}/discharge/${id}`,{},{
      headers,
    });
  }

  removeVacuum(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.delete(`${this.vacuumUrl}/remove/${id}`,{
      headers,
    });
  }

  searchVacuums(params: object): Observable<Vacuum[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.post<Vacuum[]>(`${this.vacuumUrl}/search`,params,{
      headers,
    })

  }

  getErrorMessages(): Observable<ErrorMessage[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.get<ErrorMessage[]>('http://localhost:8080/api/error/get-all', {
      headers,
    });
  }

}
