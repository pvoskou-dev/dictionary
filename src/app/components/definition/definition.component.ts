import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IWord } from '../interfaces/IWord';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css'],
})
export class DefinitionComponent implements OnInit {
  word: IWord = {
    word: '',
    phonetic: '',
    meanings: [
      {
        partOfSpeech: '',
        synonyms: [''],
        definitions: [
          {
            definition: '',
          },
        ],
      },
    ],
    sourceUrls: '',
    audioPronunciation: '',
  };
  meanings = this.word.meanings;
  hasSound = false;
  faPlay = faPlay;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.wordSubscription.subscribe((value: any) => {
      this.hasSound = false;
      if (value !== '') {
        this.word = value;
        this.meanings = this.word.meanings;
        this.meanings[0].synonyms = [
          this.meanings[0].synonyms.join(',').replace(',', ', '),
        ];
      }

      if (this.word.audioPronunciation !== '') {
        this.hasSound = true;
      }
    });
  }

  playAudio() {
    const sound = new Audio(this.word.audioPronunciation);
    sound.play();
  }
}
