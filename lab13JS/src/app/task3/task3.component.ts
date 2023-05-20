import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  template: `
    <input type="text" [(ngModel)]="newCountry" (blur)="addCountry()">
    <ul>
      <li *ngFor="let country of countries">{{ country }}</li>
    </ul>
  `
})
export class Task3Component {
  countries: string[] = ['Україна', 'США', 'Німеччина'];
  newCountry: string = '';

  addCountry() {
    if (this.newCountry) {
      this.countries.push(this.newCountry);
      this.newCountry = '';
    }
  }
}
