import { EmployeeService } from './../employee.service';
import { Observable } from 'rxjs';
import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.employees = this.employeeService.getListEmployee();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.loadAll;
    },
    error => console.log(error));
  }

}
