import styled from "styled-components";

export const NavTable = styled.header`
  margin: 3em 2em 2em 2em;
  display: flex;
  justify-content: space-between;
`;
export const FilterTable = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1em;
`;
export const OptionsFiltered = styled.li`
  margin-right: 1em;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
export const CreateElement = styled.button``;
