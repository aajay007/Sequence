import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employee.json";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get(this._url);
  }
}
