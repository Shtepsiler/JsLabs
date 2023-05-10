import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  name: string = 'Петро';
  surname: string = 'Петренко';
  age: number = 25;
}

