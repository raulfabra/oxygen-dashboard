import { SyntheticEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./app/Contexts/AuthContext";
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
} from "./styleLogin";

export const mockUser = {
  id: 100,
  email: "employer33@gmail.com",
  password: "1234",
};

export const Login = () => {
  const [showMessageCredentialsError, setMessageCredentialsError] = useState(false);
  const [showTrackCount, setTrackCount] = useState(false);
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: SyntheticEvent) => {
    event.preventDefault();

    if (email === mockUser.email && password === mockUser.password) {
      context?.authDispatch({ type: "login", payload: { authentication: true, email, password, fullName: "admin" } });
      setMessageCredentialsError(false);
      navigate("/dashboard");
    } else {
      context?.authDispatch({ type: "error", payload: { authentication: false, email, password, fullName: "" } });
      setMessageCredentialsError(true);
    }
  };

  return (
    <Main $login>
      <TitleContainer>
        <TitleHotelDashboard>HOTEL MIRANDA DASHBOARD</TitleHotelDashboard>
        <div>
          <MdLightbulb color="#eb9d0c" size={35} onClick={() => setTrackCount(!showTrackCount)} />
        </div>
      </TitleContainer>

      {showTrackCount ? (
        <ModalWrapper>
          <ModalContent>
            <ModalExit onClick={() => setTrackCount(!showTrackCount)}> ✖ </ModalExit>
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
          <InputLogin
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <LabelLogin htmlFor="password">Password</LabelLogin>
          <InputLogin
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
          />
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
