import { Component } from '@angular/core';

@Component({
  selector: 'app-task11',
  templateUrl: './task11.component.html',
})
export class Task11Component {
  languages = ['html', 'css', 'js', 'php'];

  deleteLanguage(lang: string) {
    const index = this.languages.indexOf(lang);
    if (index !== -1) {
      this.languages.splice(index, 1);
    }
  }
}
