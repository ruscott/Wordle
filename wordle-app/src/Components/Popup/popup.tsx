import s from "./popup.styles";

interface PopupProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
  text: string;
  handelClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({
  showPopup,
  setShowPopup,
  text,
  handelClose,
}) => {
  if (!showPopup) {
    return null;
  }

  return (
    <s.PopupContainer>
      <s.PopupContent>
        <s.PopupText>{text}</s.PopupText>
        <s.PopupButton onClick={handelClose}>Close</s.PopupButton>
      </s.PopupContent>
    </s.PopupContainer>
  );
};
