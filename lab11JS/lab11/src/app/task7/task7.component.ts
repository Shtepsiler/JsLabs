import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component {
  languages: string[] = ['html', 'css', 'js', 'php'];

  changeLanguage(): void {
    const index = this.languages.indexOf('php');
    if (index !== -1) {
      this.languages[index] = 'sql';
    }
  }
}
