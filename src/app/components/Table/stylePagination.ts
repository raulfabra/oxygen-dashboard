import styled from "styled-components";

const colors = {
  primary: "#135846",
  secondary: "#E23428",
  tertiary: "#393939",
  quaternary: "#EBEBEB",
  quinary: "#799283",
};

export const PaginationWrapper = styled.nav`
  margin: 3em;
  display: flex;
  justify-content: space-around;
`;
export const PaginationText = styled.div``;

export const PaginationTable = styled.ul`
  padding: 1em;
  display: flex;
  text-decoration: none;
  list-style-type: none;
  justify-content: center;
  gap: 2em;
  font-size: 1.5rem;
  border: 2px solid black;
`;
export const Numbers = styled.li`
  background-color: ${colors.quaternary};
  border: 2px solid ${colors.primary};

  &:hover {
    cursor: pointer;
  }
`;
export const ShowingPage = styled.p``;
