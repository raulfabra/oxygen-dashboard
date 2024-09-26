import { SyntheticEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../app/Contexts/AuthContext";
import { hardCodeUser } from "../utils/utils";
import { MdLightbulb } from "react-icons/md";
import {
  ButtonLogin,
  FormLogin,
  InputContainer,
  InputLogin,
  LabelLogin,
  Main,
  ModalContent,
  ModalExit,
  ModalText,
  ModalWrapper,
  SpanError,
  TitleContainer,
  TitleHotelDashboard,
} from "../styles/stylesComponents";

export const Login = () => {
  const [showCountAdmin, setCoutAdmin] = useState(false);
  const [showMessageCredentialsError, setMessageCredentialsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event: SyntheticEvent) => {
    event.preventDefault();

    if (email === hardCodeUser.email && password === hardCodeUser.password) {
      context?.authDispatch({ type: "login", payload: { authentication: true, email, password, fullName: "admin" } });
      setMessageCredentialsError(true);
      navigate("/dashboard");
    } else {
      context?.authDispatch({ type: "error", payload: { authentication: false, email, password, fullName: "" } });
      setMessageCredentialsError(false);
    }
  };

  return (
    <Main $login>
      <TitleContainer>
        <TitleHotelDashboard>HOTEL MIRANDA DASHBOARD</TitleHotelDashboard>
        <div>
          <MdLightbulb color="#eb9d0c" size={35} onClick={() => setCoutAdmin(!showCountAdmin)} />
        </div>
      </TitleContainer>

      {showCountAdmin ? (
        <ModalWrapper>
          <ModalContent>
            <ModalExit onClick={() => setCoutAdmin(!showCountAdmin)}> ✖ </ModalExit>
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
          <InputLogin type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </InputContainer>
        <InputContainer>
          <LabelLogin htmlFor="password">Password</LabelLogin>
          <InputLogin type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </InputContainer>

        {!showMessageCredentialsError ? (
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
