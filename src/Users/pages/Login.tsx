import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginActions } from "../hooks/useLoginActions";
import {
  Anchor,
  CheckBox,
  Container,
  FormContainer,
  Heading,
  Input,
  Label,
  LoginButton,
  LoginForm,
  Main,
  Paragraph,
  SpanError,
  Subheading,
} from "../styles/login-styles";
import { inicialStateEmail, inicialStatePassword } from "../../app/utils/utils";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(inicialStateEmail);
  const [password, setPassword] = useState(inicialStatePassword);

  const { handleCheckBoxRemember, isChecked, handleLogin, showMessageCredentialsError } = useLoginActions();

  return (
    <Main $login>
      <FormContainer>
        <div>
          <Heading>HOTEL MIRANDA</Heading>
          <Subheading>Dashboard</Subheading>
        </div>
        <LoginForm onSubmit={(event) => handleLogin(event, email, password)}>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter Email" value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
          />
          <Container>
            <Label>
              <CheckBox name="remember" value="remember" checked={isChecked} onChange={(event) => handleCheckBoxRemember(event, email, password)} />
              Remember me
            </Label>
            <Anchor $noline>Change Password</Anchor>
          </Container>
          {!showMessageCredentialsError ? (
            ""
          ) : (
            <Container>
              <SpanError>Identificated don't match. Please verify and try again.</SpanError>
            </Container>
          )}
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
        <Paragraph>
          Don't have an account? <Anchor onClick={() => navigate("/sign")}>Register Here</Anchor>
        </Paragraph>
      </FormContainer>
    </Main>
  );
};
