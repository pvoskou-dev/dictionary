import { Component, OnInit } from '@angular/core';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchValue: string = '';
  showDefinition = false;
  faSearch = faSearch;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.showDefinition.subscribe((value) => {
      this.showDefinition = value;
    });
  }

  getWordDefinition() {
    if (this.searchValue !== '') {
      this.dataService.getWordData(this.searchValue);
    }
  }
}
