import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: any = [];
  
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
    
  }

  sortName() {
    this.employees.sort((a: any, b: any) => a['name'] > b['name'] ? 1 : a['name'] < b['name'] ? -1 : 0)
  }

  /*
  sortDate() {
    this.employees.sort((a: any,b: any) =>  new Date(b.joining_date).getFullYear() > new Date(a.joining_date).getFullYear());
  }
  */

  searchName(inputSearch: any) {
    this.employees = this.employees.filter((item: any) => {
      return item.name.toLowerCase().includes(inputSearch.toLowerCase());
    });
  }

  /*
  filterExpericeRecords(){
    this.employees = this.employees.filter(
      (data: any) => new Date(data.joining_date).valueOf() > new Date ('27/2/2021').valueOf()
    );
  }
  */

  removeRecordWithId(id: any){
    this.employees = this.employees.filter(
      (data: any) => data.id != id
    );
  }
}
