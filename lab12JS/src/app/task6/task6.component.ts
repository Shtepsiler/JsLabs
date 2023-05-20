import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
    <button (click)="addUser()">Додати користувача</button>
  `,
})
export class Task6Component {
  users: string[] = ['Микола', 'Василь', 'Петро'];
  newUsers: string[] = ['Аня', 'Валя', 'Маша'];
  clickedCount: number = 0;

  addUser() {
    if (this.clickedCount < this.newUsers.length) {
      this.users.push(this.newUsers[this.clickedCount]);
      this.clickedCount++;
    }

    if (this.clickedCount === this.newUsers.length) {
      this.users.sort();
    }
  }
}
