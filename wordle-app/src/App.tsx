import { useEffect, useRef, useState } from "react";
import "./App.css";
import s from "./App.styles";
import { Keyboard } from "./Components/Keyboard/Keyboard";
import { KeyboardColours, WordObject } from "./Types";
import { WordGuess } from "./Components/WordGuess/WordGuess";
import {
  lettersInit,
  wordsArrayInit,
  keyboardColoursInit,
} from "./WordGameInit/WordGameInit";
import { AppContext } from "./Contexts/appContext";
import Header from "./Components/Header/header";
import { wordList } from "./wordList";
import { Popup } from "./Components/Popup/popup";
import { findBgColours } from "./Functions/FindBgColours";

// TO DO
// - add enter and backspace to keyboard
// - add stats pge
// - shouldn't be allowed to put spaces in
// - celebration sequence of some sort
// fix indexing
//

function App() {
  const [letters, setLetters] = useState(lettersInit);
  const [activeIndex, setActiveIndex] = useState(0);
  const [guesses, setGuesses] = useState<WordObject[]>(wordsArrayInit);
  const [currentGuess, setCurrentGuesses] = useState<number>(0);
  const MAX_GUESSES: number = 5;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [keyboardColours, setKeyboardColours] =
    useState<KeyboardColours>(keyboardColoursInit);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupDialogue, setPopupDialogue] = useState<string>("");

  var secretWord: string[] = "RACES".split("");

  useEffect(() => {
    if (inputRef.current) {
      if (activeIndex < 5) {
        inputRef.current.focus();
      }
    }
  }, [activeIndex]);

  const updateWordByNewLetter = (inputValue: string) => {
    const newLetters = [...letters];
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

  const handleLetterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toUpperCase().slice(0, 1); // get first letter only
    if (inputValue === " ") {
    } else {
      updateWordByNewLetter(inputValue);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const word = letters.join("");
      if (word.length < 5) {
        setPopupDialogue("Word is too short!");
        setShowPopup(true);
      } else if (!wordList.includes(word.toLowerCase())) {
        setPopupDialogue("Not a word!");
        setShowPopup(true);
      } else {
        const correspondingColours = findBgColours(
          letters,
          secretWord,
          keyboardColours,
          setKeyboardColours
        );
        // Create new word object with letters and colors
        const newWordObject: WordObject = {
          word: word,
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
        setLetters(lettersInit);
        setActiveIndex(0);
      }
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

  const handleKeyClick = (key: string) => {
    if (key === "Return") {
      console.log("return");
    } else if (key === "Backspace") {
      const newLetters = [...letters];
      newLetters[activeIndex] = ""; // set current box to empty
      setLetters(newLetters);
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }

      if (inputRef.current) {
        inputRef.current.focus();
      }
      console.log("back");
    } else {
      updateWordByNewLetter(key);
    }
  };

  return (
    <>
      <Header></Header>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        text={popupDialogue}
        handelClose={handleClose}
      ></Popup>
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
      <Keyboard
        onClick={handleKeyClick}
        keyboardColours={keyboardColours}
      ></Keyboard>
    </>
  );
}

export default App;
