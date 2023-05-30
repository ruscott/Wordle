import { createContext } from "react";
import { AppContextType } from "../types";

export const AppContext = createContext<AppContextType>({
  activeIndex: 0,
  letters: ["", "", "", "", ""],
  setLetters: () => {},
  guesses: [],
  setGuesses: () => {},
  setCurrentGuess: () => {},
  setHasWon: () => {},
  setShowPopup: () => {},
  setKeyboardColours: () => {},
});
