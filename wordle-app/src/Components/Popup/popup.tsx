import { useContext } from "react";
import { AppContext } from "../../Contexts/appContext";
import {
  keyboardColoursInit,
  lettersInit,
  wordsArrayInit,
} from "../../WordGameInit/WordGameInit";
import s from "./popup.styles";

interface PopupProps {
  showPopup: boolean;
  text: string;
  hasWon: boolean;
}

export const Popup: React.FC<PopupProps> = ({ showPopup, text, hasWon }) => {
  const {
    setLetters,
    setGuesses,
    setCurrentGuess,
    setHasWon,
    setShowPopup,
    setKeyboardColours,
  } = useContext(AppContext);

  const handelPlayAgain = () => {
    setKeyboardColours(keyboardColoursInit);
    setLetters(lettersInit);
    setGuesses(wordsArrayInit);
    setCurrentGuess(0);
    setHasWon(false);
    setShowPopup(false);
  };

  const handelClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <s.PopupContainer hasWon={hasWon}>
      <s.PopupContent>
        <s.PopupText>{text}</s.PopupText>
        {hasWon && (
          <s.PopupButton onClick={handelPlayAgain}>
            <i className="fas fa-redo"></i> Play Again
          </s.PopupButton>
        )}
        <s.PopupButton onClick={handelClose}>Close</s.PopupButton>
      </s.PopupContent>
    </s.PopupContainer>
  );
};
