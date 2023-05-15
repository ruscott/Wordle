import styled from "styled-components";

const LetterBox = styled.div<{ bgColour: string }>`
  height: 70px;
  width: 70px;
  border: solid;
  margin: auto;
  background-color: ${(props) => props.bgColour};
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const styles = { LetterBox };

export default styles;
