import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Dictionary';
  fontValue: string = 'serif';
  toggleDarkMode = false;

  constructor() {}

  ngOnInit(): void {}

  fontValueSelected() {
    console.log(this.fontValue);
  }

  toggleLightDark() {
    document.body.classList.toggle('dark-theme');
    const definition = document.getElementById('definition');
    definition?.classList.toggle('dark-theme');
    const synonyms = document.getElementById('synonyms');
    synonyms?.classList.toggle('dark-theme');
    const definitions = document.getElementById('list-definitions');
    definitions?.classList.toggle('dark-theme');
  }
}
