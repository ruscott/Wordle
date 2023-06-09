import React from "react";
import s from "./keyboard.styles";

interface KeyboardProps {
  onClick: (key: string) => void;
  keyboardColours: { [key: string]: string };
}

export const Keyboard: React.FC<KeyboardProps> = ({
  onClick,
  keyboardColours,
}) => {
  const handleKeyClick = (key: string) => {
    onClick(key);
  };

  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Backspace", "Z", "X", "C", "V", "B", "N", "M", "Return"],
  ];

  return (
    <s.Keyboard>
      {rows.map((row, rowIndex) => (
        <s.KeyboardRow key={rowIndex}>
          {row.map((letter) => (
            <s.Key
              key={letter}
              onClick={() => handleKeyClick(letter)}
              bgColour={keyboardColours[letter]}
              isWide={letter === "Backspace" || letter === "Return"}
            >
              {letter}
            </s.Key>
          ))}
        </s.KeyboardRow>
      ))}
    </s.Keyboard>
  );
};
