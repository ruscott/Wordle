export type LetterObject = {
  letter: string;
  color: string;
};

export type WordObject = {
  word: string;
  letters: LetterObject[];
};

export type AppContextType = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  letters: string[];
  setLetters: React.Dispatch<React.SetStateAction<string[]>>;
  guesses: WordObject[];
  setGuesses: React.Dispatch<React.SetStateAction<WordObject[]>>;
};

export type KeyboardColours = {
  [key: string]: string;
};
