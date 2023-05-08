import { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import s from "./App.styles";
import { AppContextType, WordObject } from "./Types";
import { WordGuess } from "./WordGuess/WordGuess";

const AppContext = createContext<AppContextType>({
  activeIndex: 0,
  setActiveIndex: () => {},
  letters: ["", "", "", "", ""],
  setLetters: () => {},
  guesses: [],
  setGuesses: () => {},
});

function App() {
  const wordsArray: WordObject[] = Array.from({ length: 6 }, () => {
    return {
      word: "     ",
      letters: [
        { letter: " ", color: "white" },
        { letter: " ", color: "white" },
        { letter: " ", color: "white" },
        { letter: " ", color: "white" },
        { letter: " ", color: "white" },
      ],
    };
  });

  const [letters, setLetters] = useState(["", "", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [guesses, setGuesses] = useState<WordObject[]>(wordsArray);
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
  var secretWord: string[] = "CREPT".split("");

  const findBgColours = (guessedWord: string[], secretWord: string[]) => {
    let colours: string[] = ["", "", "", "", ""];
    for (let i = 0; i < guessedWord.length; i++) {
      const letter = guessedWord[i];
      if (letter === " ") {
        colours[i] = "white";
      } else if (letter === secretWord[i]) {
        // Correct letter in correct position
        secretWord[i] = "_";
        colours[i] = "green";
      }
    }
    for (let i = 0; i < guessedWord.length; i++) {
      const letter = guessedWord[i];
      if (colours[i] === "") {
        if (secretWord.includes(letter)) {
          secretWord[secretWord.indexOf(letter)] = "_";
          colours[i] = "yellow";
        } else colours[i] = "grey";
      }
    }
    return colours;
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const correspondingColours = findBgColours(letters, secretWord);
      // Create new word object with letters and colors
      const newWordObject: WordObject = {
        word: letters.join(""),
        letters: letters.map((letter, index) => ({
          letter,
          color: correspondingColours[index],
        })),
      };
      const newGuesses = guesses;
      newGuesses[currentGuess] = newWordObject;

      setCurrentGuesses(currentGuess + 1);

      // Add new word object to guesses list
      setGuesses(newGuesses);

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
      {Array.from(Array(MAX_GUESSES).keys()).map((guess: number) => (
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
