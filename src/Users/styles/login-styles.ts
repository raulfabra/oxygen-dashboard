import styled, { keyframes } from "styled-components";

const colors = {
  primary: "#135846",
  secondary: "#E23428",
  tertiary: "#393939",
  quaternary: "#EBEBEB",
  quinary: "#799283",
  sexiary: "#212121",
};

export const Main = styled.main<{ $login?: boolean; $layout?: boolean }>`
  ${(props) =>
    props.$login &&
    `display: flex;
    min-height: 100vh;;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(178deg, #135843 0%, #f8f8f8 100%);
    transition: background 0.3s ease;`}
  ${(props) =>
    props.$layout &&
    `position: absolute;
    top: 10%;
    left: 15%;
    width: 80%;
    margin: 1em 2em;`}
`;

export const SpanError = styled.span`
  font-family: "poppinsregular--offline";
  font-size: 0.8rem;
  color: ${colors.secondary};
  padding: 0.5em;
  border-radius: 5px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  padding: 2em;
  box-shadow: 4px 4px 20px #888888;
  background-color: #ffffffb1;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
export const Heading = styled.h2`
  font-family: "poppinssemibold_italic--offline";
  font-size: 46px;
`;

export const Subheading = styled.h4`
  display: flex;
  justify-content: flex-end;
  font-family: "poppinssemibold--offline";
  font-size: 23px;
`;

export const LoginForm = styled.form`
  width: 90%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Label = styled.label`
  font-family: "poppinsregular--offline";
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`;
export const Input = styled.input`
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  outline: none;
`;
export const LoginButton = styled.button`
  color: white;
  width: 60%;
  font-size: 16px;
  padding: 10px 15px;
  margin: 0 auto;
  margin-top: 30px;
  border: none;
  border-radius: 4px;
  background-color: #1575a7;
  cursor: pointer;
  &:hover {
    background-color: #1885c0;
  }
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Anchor = styled.a<{ $noline?: boolean }>`
  color: #135846;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.$noline &&
    `
      text-decoration: none;
    `}
`;
