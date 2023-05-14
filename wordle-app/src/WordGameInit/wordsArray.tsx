import { WordObject } from "../Types";

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
