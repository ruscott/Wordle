import { WordObject, KeyboardColours } from "../Types";

export const wordsArrayInit: WordObject[] = Array.from({ length: 6 }, () => {
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

export const lettersInit: string[] = ["", "", "", "", ""];

export const keyboardColoursInit: KeyboardColours = {
  Q: "white",
  W: "white",
  E: "white",
  R: "white",
  T: "white",
  Y: "white",
  U: "white",
  I: "white",
  O: "white",
  P: "white",
  A: "white",
  S: "white",
  D: "white",
  F: "white",
  G: "white",
  H: "white",
  J: "white",
  K: "white",
  L: "white",
  Z: "white",
  X: "white",
  C: "white",
  V: "white",
  B: "white",
  N: "white",
  M: "white",
  Space: "white",
  Return: "white",
};
