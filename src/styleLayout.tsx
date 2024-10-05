import styled from "styled-components";

export const Main = styled.main<{ $login?: boolean; $layout?: boolean }>`
  ${(props) =>
    props.$login &&
    `display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`}
  ${(props) =>
    props.$layout &&
    `position: absolute;
  top: 10%;
  left: 15%;
  width: 80%;
  margin: 1em 2em`}
`;
