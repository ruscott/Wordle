import React from "react";
import { LetterBox } from "../LetterBox/LetterBox";
import { LetterInputBox } from "../LetterInputBox/LetterInputBox";
import s from "./WordGuess.styles";

type Props = {
  letters: string[];
  activeIndex: number;
  inputRef: any;
  handleLetterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  forInput: boolean;
  guess: string;
};

export const WordGuess: React.FC<Props> = ({
  letters,
  activeIndex,
  inputRef,
  handleLetterChange,
  handleKeyDown,
  forInput,
  guess,
}) => {
  console.log(guess);
  if (forInput) {
    return (
      <s.Row>
        {Array.from(Array(5).keys()).map((index: number) => (
          <LetterInputBox
            key={index}
            index={index}
            letters={letters}
            activeIndex={activeIndex}
            inputRef={inputRef}
            handleLetterChange={handleLetterChange}
            handleKeyDown={handleKeyDown}
          />
        ))}
      </s.Row>
    );
  } else
    return (
      <s.Row>
        {Array.from(Array(5).keys()).map((index: number) => (
          <LetterBox letter={guess[index]} key={index} />
        ))}
      </s.Row>
    );
};
