import { Component } from '@angular/core';

@Component({
  selector: 'app-task04',
  templateUrl: './task04.component.html',
  styleUrls: ['./task04.component.css']
})
export class Task04Component {
  workers = [
    { name: 'Микола', age: 30, salary: 400 },
    { name: 'Василь', age: 31, salary: 500 },
    { name: 'Петро', age: 32, salary: 600 },
  ];

}
