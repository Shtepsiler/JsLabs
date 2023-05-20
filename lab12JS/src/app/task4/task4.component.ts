import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    <button (click)="sortList()">Сортувати</button>
  `,
})
export class Task4Component {
  items: number[] = [5, 3, 1, 4, 2];

  sortList() {
    this.items.sort();
  }
}
