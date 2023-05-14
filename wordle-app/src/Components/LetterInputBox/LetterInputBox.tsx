import React from "react";
import s from "./LetterInputBox.styles";

type Props = {
  index: number;
  letters: string[];
  activeIndex: number;
  inputRef: any;
  handleLetterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
};

export const LetterInputBox: React.FC<Props> = ({
  index,
  letters,
  activeIndex,
  inputRef,
  handleLetterChange,
  handleKeyDown,
}) => {
  const isEditable = index === activeIndex;
  return (
    <s.LetterGuessBox
      type="text"
      value={letters[index]}
      onChange={handleLetterChange}
      onKeyDown={handleKeyDown}
      ref={isEditable ? inputRef : null}
      disabled={!isEditable}
    />
  );
};
