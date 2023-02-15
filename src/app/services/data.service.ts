import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  response: any;
  partialResponse = [];

  constructor(private http: HttpClient) {}

  wordSubscription = new BehaviorSubject<any>('');
  showDefinition = new BehaviorSubject<boolean>(false);

  getWordData(word: string) {
    return this.http.get(this.url + word).subscribe((value) => {
      this.response = value;
      const [
        {
          word,
          phonetic,
          meanings,
          sourceUrls,
          phonetics: [{ audio }],
        },
      ] = this.response;
      const audioPronunciation = audio;
      console.log(this.response);

      this.wordSubscription.next({
        word,
        phonetic,
        meanings,
        sourceUrls,
        audioPronunciation,
      });
      this.showDefinition.next(true);
    });
  }
}
