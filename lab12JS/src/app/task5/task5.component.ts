import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  template: `
    <ul>
      <li *ngFor="let language of languages">
        {{ language }}
        <button (click)="updateLanguage(language)">+</button>
      </li>
    </ul>
  `,
})
export class Task5Component {
  languages: string[] = ['html', 'css', 'js', 'php'];

  updateLanguage(language: string) {
    const index = this.languages.indexOf(language);
    if (index !== -1) {
      this.languages[index] += '+';
    }
  }
}
