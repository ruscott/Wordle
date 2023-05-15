import styled from "styled-components";

const Key = styled.button<{ bgColour: string; isWide?: boolean }>`
  background-color: ${(props) => props.bgColour};
  color: "white";
  border-radius: 8px;
  padding: 0.45%;
  margin: 3px 1px;
  font-size: 25px;
  width: ${(props) => (props.isWide ? "auto" : "50px")};
`;

const Keyboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
`;

const KeyboardRow = styled.div`
  flex: none;
  display: flex;
  flex-wrap: nowrap;
`;

const styles = { Key, Keyboard, KeyboardRow };

export default styles;
