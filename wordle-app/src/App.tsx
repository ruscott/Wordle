import { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import s from "./App.styles";
import { WordGuess } from "./WordGuess/WordGuess";

type AppContextType = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  letters: string[];
  setLetters: React.Dispatch<React.SetStateAction<string[]>>;
  guesses: string[];
  setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
};

const AppContext = createContext<AppContextType>({
  activeIndex: 0,
  setActiveIndex: () => {},
  letters: ["", "", "", "", ""],
  setLetters: () => {},
  guesses: [],
  setGuesses: () => {},
});

function App() {
  const [letters, setLetters] = useState(["", "", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [guesses, setGuesses] = useState<string[]>([
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
  ]);
  const [currentGuess, setCurrentGuesses] = useState<number>(0);
  const MAX_GUESSES: number = 5;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      if (activeIndex < 5) {
        inputRef.current.focus();
      }
    }
  }, [activeIndex]);

  const handleLetterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLetters = [...letters];
    const inputValue = event.target.value.toUpperCase().slice(0, 1); // get first letter only
    newLetters[activeIndex] = inputValue;
    setLetters(newLetters);

    if (inputValue === "") {
      // Move to the previous box if the input value is empty
      if (activeIndex > 0) {
        setActiveIndex(activeIndex);
      }
    } else {
      // Move to the next box if the input value is not empty
      if (activeIndex < 4) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // Add current word to guesses list
      const newGuesses = guesses;
      newGuesses[currentGuess] = letters.join("");
      console.log(newGuesses);
      setGuesses(newGuesses);
      setCurrentGuesses(currentGuess + 1);
      // Clear input boxes and reset active index
      setLetters(["", "", "", "", ""]);
      setActiveIndex(0);
    }
    // Move to the previous box when the user presses the backspace key
    else if (event.key === "Backspace" && activeIndex > 0) {
      // backspace key
      const newLetters = [...letters];
      newLetters[activeIndex] = ""; // set current box to empty
      setLetters(newLetters);
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        letters,
        setLetters,
        guesses,
        setGuesses,
      }}
    >
      {Array.from(Array(3).keys()).map((guess: number) => (
        <WordGuess
          key={guess}
          letters={letters}
          activeIndex={activeIndex}
          inputRef={inputRef}
          handleLetterChange={handleLetterChange}
          handleKeyDown={handleKeyDown}
          forInput={guess === currentGuess}
          guess={guesses[guess]}
        />
      ))}
    </AppContext.Provider>
  );
}

export default App;
