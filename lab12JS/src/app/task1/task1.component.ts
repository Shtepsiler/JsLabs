import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
 template: `
 <div *ngFor="let number of numbers">
 <span>{{ number + 3 }}</span>
</div>
  `,
})
export class Task1Component {
numbers: number[] = [1, 2, 3, 4, 5];

}
