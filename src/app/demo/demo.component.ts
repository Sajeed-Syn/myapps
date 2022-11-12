import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name: string = 'Tom'
  age: number = 20
  fno: number = 70
  sno: number = 80
  city:string='Mumbai'
  Show():void{
    alert('Name is '+this.name + ' Lives in ' +this.city)
  }
  sum(): number {
    return this.fno + this.sno
  }
  constructor() { }

  ngOnInit(): void {
  }

}
