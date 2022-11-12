import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  Display(name: string) {
    return 'Hello ' + name;
  }
  constructor() { }
}
