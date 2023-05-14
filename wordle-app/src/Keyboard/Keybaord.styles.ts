import styled from "styled-components";

const Key = styled.button<{ bgColour: string }>`
  background-color: ${(props) => props.bgColour};
  color: "white";
  border-radius: 10px;
  padding: 0.45%;
  margin: 1px 1px;
  font-size: 25px;
  width: 30px;
`;

const Keyboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`;

const KeyboardRow = styled.div`
  flex: none;
  display: flex;
  flex-wrap: nowrap;
`;

const styles = { Key, Keyboard, KeyboardRow };

export default styles;
