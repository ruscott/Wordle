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
  letters: string[];
  setLetters: React.Dispatch<React.SetStateAction<string[]>>;
  guesses: WordObject[];
  setGuesses: React.Dispatch<React.SetStateAction<WordObject[]>>;
  setCurrentGuess: React.Dispatch<React.SetStateAction<number>>;
  setHasWon: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setKeyboardColours: React.Dispatch<React.SetStateAction<KeyboardColours>>;
};

export type KeyboardColours = {
  [key: string]: string;
};
