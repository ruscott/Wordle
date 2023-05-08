import styled from "styled-components";

const LetterBox = styled.div<{ bgColour: string }>`
  height: 95%;
  width: 95%;
  border: solid;
  margin: auto;
  background-color: ${(props) => props.bgColour};
`;

const styles = { LetterBox };

export default styles;
