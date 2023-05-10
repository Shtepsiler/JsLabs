import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
})
export class Task8Component {
  languages = ['html', 'css', 'js', 'php'];

  addLanguageToEnd() {
    this.languages.push('sql');
  }
}
