import React from "react";
import s from "./LetterBox.styles";

type Props = {
  letter: string;
};

export const LetterBox: React.FC<Props> = ({ letter }) => {
  return <s.LetterBox>{letter} </s.LetterBox>;
};
