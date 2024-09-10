import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLightbulb } from "react-icons/md";
import {
  Main,
  TitleContainer,
  Title,
  ModalWrapper,
  ModalContent,
  ModalText,
  ModalExit,
  FormLogin,
  InputContainer,
  LabelLogin,
  InputLogin,
  SpanError,
  ButtonLogin,
} from "../styles/loginStyle";

// User Validate Hardcoded
const validEmail = "employer33@gmail.com";
const validPassword = "1234";

export const Login = () => {
  const [isAuthenticated, setAuthenticated] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bulbOn, setBulbOn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (event, data) => {
    event.preventDefault();

    if (email === validEmail && password === validPassword) {
      window.localStorage.setItem("isAuthenticated", true);
      setAuthenticated(true);
      navigate("/dashboard");
    } else {
      window.localStorage.setItem("isAuthenticated", false);
      setAuthenticated(false);
    }
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleBulb = () => {
    setBulbOn(!bulbOn);
  };

  return (
    <Main $login>
      <TitleContainer>
        <Title>HOTEL MIRANDA DASHBOARD</Title>
        <div>
          <MdLightbulb color="#eb9d0c" size={35} onClick={handleBulb} />
        </div>
      </TitleContainer>

      {bulbOn ? (
        <ModalWrapper>
          <ModalContent>
            <ModalExit onClick={handleBulb}> ✖ </ModalExit>
            <ModalText>Email ----&gt; employer33@gmail.com</ModalText>
            <ModalText>Password -&gt; 1234</ModalText>
          </ModalContent>
        </ModalWrapper>
      ) : (
        ""
      )}

      <FormLogin onSubmit={handleLogin}>
        <InputContainer>
          <LabelLogin htmlFor="email">Email</LabelLogin>
          <InputLogin type="text" name="email" id="email" value={email} onChange={handleEmail} />
        </InputContainer>
        <InputContainer>
          <LabelLogin htmlFor="password">Password</LabelLogin>
          <InputLogin type="password" name="password" id="password" value={password} onChange={handlePassword} />
        </InputContainer>

        {isAuthenticated || isAuthenticated === null ? (
          ""
        ) : (
          <TitleContainer>
            {" "}
            <SpanError>Identificated don't match. Please verify and try again.</SpanError>{" "}
          </TitleContainer>
        )}

        <ButtonLogin type="submit">LOGIN</ButtonLogin>
      </FormLogin>
    </Main>
  );
};
