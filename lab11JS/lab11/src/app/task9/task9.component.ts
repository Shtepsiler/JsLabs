import { Component } from '@angular/core';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
})
export class Task9Component {
  languages = ['html', 'css', 'js', 'php'];

  addLanguageToStart() {
    this.languages.unshift('sql');
  }
}
