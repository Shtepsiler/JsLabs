import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.css']
})
export class Task8Component {
  countries: Record<string, string[]> = {
    Україна: ['Київ', 'Львів'],
    Польща: ['Варшава', 'Лодзь'],
    Великобританія: ['Лондон', 'Манчестер']
  };

  keys = Object.keys;

  constructor() { }
}
