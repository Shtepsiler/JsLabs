import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  name: string = 'Іван';
  surname: string = 'Іванів';
  age: number = 25;

  changeName(): void {
    this.name = 'Петро';
  }

  changeSurname(): void {
    this.surname = 'Петренко';
  }

  changeAge(): void {
    this.age = 30;
  }
}
