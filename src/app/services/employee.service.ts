import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return of(
    [
      {
        name: 'Employee 1'
      },{
        name: 'Employee 2'
      },{
        name: 'Employee 3'
      },{
        name: 'Employee 4'
      },
    ]);
    //return this.http.get(`${environment.apiEndpoint}employee`);
  }
}
