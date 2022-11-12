import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  weekdays: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  age: number = 20

  emplist: Employee[] = [
    { id: 1010, name: 'Tom', salary: 60000, dept: 'IT' },
    { id: 1020, name: 'Bob', salary: 70000, dept: 'Fin' },
    { id: 1030, name: 'Ali', salary: 50000, dept: 'Fin' },
    { id: 1040, name: 'Sam', salary: 40000, dept: 'IT' },
    { id: 1050, name: 'Raj', salary: 30000, dept: 'Fin' },
    { id: 1060, name: 'Jay', salary: 80000, dept: 'HR' }
  ]
  GetTotal(): number {
    var total: number = 0
    for (var i = 0; i < this.emplist.length; i++) {
      total = total + this.emplist[i].salary
    }
    return total
  }
  constructor(private msgservice: MessageService) { }

  msg = this.msgservice.Display('Tom')

  ngOnInit(): void {
  }

}
