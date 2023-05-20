import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  template: `
    <table>
      <tr *ngFor="let row of numbers">
        <td *ngFor="let number of row">{{ number }}</td>
      </tr>
    </table>
  `,
})
export class Task7Component {
  numbers: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
}
