import styled, { css, keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const PopupContainer = styled.div<{ hasWon: boolean }>`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20%;

  ${({ hasWon }) =>
    hasWon &&
    css`
      animation: ${spinAnimation} 4s linear 2s;
    `}
`;

const PopupContent = styled.div`
  background-color: pink;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PopupText = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

const PopupButton = styled.button`
  padding: 8px 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const styles = { PopupContainer, PopupContent, PopupText, PopupButton };

export default styles;
