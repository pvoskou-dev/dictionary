import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { faMoon } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Dictionary';
  fontValue: string = 'serif';
  toggleDarkMode = false;
  faMoon = faMoon

  constructor() {}

  ngOnInit(): void {}

  fontValueSelected() {
    console.log(this.fontValue);
  }

  toggleLightDark() {
    document.body.classList.toggle('dark-theme');

  }
}
