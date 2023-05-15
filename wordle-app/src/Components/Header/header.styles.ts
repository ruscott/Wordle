import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #ffe1f7;
  background-image: radial-gradient(circle, #ffd6f7, #ffe1f7);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffd700;
`;

const styles = { HeaderContainer, Title };

export default styles;
