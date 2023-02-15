export interface IWord {
  word: string;
  phonetic: string;
  meanings: [
    {
      partOfSpeech: string;
      synonyms: [string];
      definitions: [{ definition: string }];
    }
  ];
  sourceUrls: string;
  audioPronunciation: string;
}
