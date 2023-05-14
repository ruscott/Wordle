import { createContext } from "react";
import { AppContextType } from "../Types";

export const AppContext = createContext<AppContextType>({
  activeIndex: 0,
  setActiveIndex: () => {},
  letters: ["", "", "", "", ""],
  setLetters: () => {},
  guesses: [],
  setGuesses: () => {},
});
