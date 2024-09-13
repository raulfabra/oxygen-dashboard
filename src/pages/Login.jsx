import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../app/Contexts/AuthContext";
import { hardCodeUser } from "../utils/utils";
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

export const Login = () => {
  const [bulbOn, setBulbOn] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === hardCodeUser.email && password === hardCodeUser.password) {
      context.authDispatch({ type: "login", payload: { email, password } });
      setAuthenticated(true);
      navigate("/dashboard");
    } else {
      context.authDispatch({ type: "error" });
      setAuthenticated(false);
    }
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
          <InputLogin type="text" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </InputContainer>
        <InputContainer>
          <LabelLogin htmlFor="password">Password</LabelLogin>
          <InputLogin type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
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
