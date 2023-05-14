import React from "react";
import s from "./LetterBox.styles";

type Props = {
  letter: string;
  bgColour: string;
};

export const LetterBox: React.FC<Props> = ({ letter, bgColour }) => {
  return <s.LetterBox bgColour={bgColour}>{letter}</s.LetterBox>;
};
