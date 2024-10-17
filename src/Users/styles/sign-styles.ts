import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(178deg, #135843 0%, #f8f8f8 100%);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  margin: 1em 0;
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const Label = styled.label`
  font-family: "poppinsbold--offline";
  font-size: 1rem;
`;
export const Label_1 = styled.label`
  font-family: "poppinsregular--offline";
  font-size: 0.8em;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 1em;
  background-color: #135846;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0f4b3e;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
`;

export const Heading = styled.h2`
  color: #ffffff;
  font-size: 2.5em;
  padding: 1em;
`;
