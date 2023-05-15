import { KeyboardColours } from "../types";

export const findBgColours = (
  guessedWord: string[],
  secretWord: string[],
  keyboardColours: KeyboardColours,
  setKeyboardColours: (keyboardColours: KeyboardColours) => void
) => {
  let newKeyboardColours = keyboardColours;
  let colours: string[] = ["", "", "", "", ""];
  for (let i = 0; i < guessedWord.length; i++) {
    const letter = guessedWord[i];
    if (letter === " ") {
      colours[i] = "white";
    } else if (letter === secretWord[i]) {
      // Correct letter in correct position
      secretWord[i] = "_";
      colours[i] = "green";
      newKeyboardColours[letter] = "green";
    }
  }
  for (let i = 0; i < guessedWord.length; i++) {
    const letter = guessedWord[i];
    if (colours[i] === "") {
      if (secretWord.includes(letter)) {
        secretWord[secretWord.indexOf(letter)] = "_";
        colours[i] = "yellow";
        if (newKeyboardColours[letter] !== "green") {
          newKeyboardColours[letter] = "yellow";
        }
      } else {
        newKeyboardColours[letter] = "grey";
        colours[i] = "grey";
      }
    }
  }
  setKeyboardColours(newKeyboardColours);
  return colours;
};
