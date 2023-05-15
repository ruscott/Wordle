import { createContext } from "react";
import { AppContextType } from "../types";

export const AppContext = createContext<AppContextType>({
  activeIndex: 0,
  setActiveIndex: () => {},
  letters: ["", "", "", "", ""],
  setLetters: () => {},
  guesses: [],
  setGuesses: () => {},
});
