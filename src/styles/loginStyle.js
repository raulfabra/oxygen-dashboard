import styled from "styled-components";
import { colors } from "./themes.js/theme";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 2em;
  padding: 2em;
  margin: 2em;
`;

export const Title = styled.h1`
  font-family: "poppinssemibold_italic--offline";
  font-size: 2.5rem;
  color: ${colors.primary};
  letter-spacing: 2px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalContent = styled.div`
  position: relative;
  background-color: #f5f5dc;
  border: 2px solid black;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const ModalText = styled.p`
  padding: 1em;
  font-family: "poppinsmedium--offline";
  font-size: 1rem;
  text-align: justify;
`;
export const ModalExit = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 25px;
  height: 25px;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${colors.quinary};
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 2em;
`;
export const LabelLogin = styled.label`
  width: 90%;
  font-family: "poppinsregular--offline";
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${colors.tertiary};
`;
export const InputLogin = styled.input`
  border: none;
  outline: none;
  padding: 1em;
  font-family: "poppinsmedium--offline";
  font-size: 1rem;
  text-align: center;
  border-radius: 20px;
  background-color: ${colors.quaternary};
`;
export const SpanError = styled.span`
  font-family: "poppinsregular--offline";
  font-size: 0.8rem;
  color: ${colors.secondary};
  background-color: ${colors.quinary};
`;
export const ButtonLogin = styled.button`
  border: none;
  margin: 1em auto;
  width: 30%;
  padding: 1em;
  border-radius: 20px;
  cursor: pointer;
`;
