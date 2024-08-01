import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdLightbulb } from 'react-icons/md'
import styled from 'styled-components'

// User Validate Hardcoded
const validUsername = 'employer'
const validPassword = '1234'

// style components
const Main = styled.main`
  position: relative;
  background-color: #044634;
  opacity: 0.95;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url("/Background-Footer.png");
    background-color: #ffffff;
    opacity: 0.02;
  }
`
const PortalMain = styled.section`
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  padding: 4em;
  text-align: center;
`
const TitleApp = styled.h1`
  margin: 0 auto;
  width: 70%;
  padding: 1em;
  font-family: 'poppinssemibold_italic--offline';
  font-size: 3.5rem;
  text-shadow: 3px 3px 5px rgba(250, 242, 242, 0.3);
  color: #7e2821;
  letter-spacing: 2px;
`
const SubtitleApp = styled.span`
  position: relative;
  top: 25%;
  left: 40%;
  font-size: 2.5rem;
  color: #7e2821;
`
const BulbIcon = styled.div`
  position: absolute;
  top: 30%;
  left: 35%;
  cursor: pointer;
`
const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
const ModalContent = styled.div`
  background-color: #f5f5dc; /* Fondo beige claro */
  border: 2px solid black;   /* Borde negro */
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
const ModalText = styled.p`
  padding: 1em;
  font-family: 'poppinsmedium--offline';
  font-size: 1rem;
  text-align: justify;
`
const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  gap: 3em;
`
const LabelLogin = styled.label`
  font-family: 'poppinsregular--offline';
  color: #ffffff;
`
const InputLogin = styled.input`
  display: block;
  border: none;
  outline: none;
  margin: 1em auto;
  padding: 1em;
  font-family: 'poppinsmedium--offline';
  font-size: 1rem;
  text-align: center;
  width: 50%;
  border-radius: 20px;
  background-color: #80ccb8;
`
const SpanError = styled.span`
  font-family: 'poppinsregular--offline';
  color: #000000;
`
const ButtonLogin = styled.button`
  border: none;
  margin: 1em auto;
  width: 30%;
  padding: 1em;
  border-radius: 20px;
  cursor: pointer;
`

export const Login = () => {
  const [isAuthenticated, setAuthenticated] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [bulbOn, setBulbOn] = useState(false)

  const navigate = useNavigate()

  const handleLogin = (event, data) => {
    event.preventDefault()
    console.log(data)
    if (username === validUsername && password === validPassword) {
      window.localStorage.setItem('isAuthenticated', true)
      setAuthenticated(true)
      navigate('/dashboard')
    } else {
      window.localStorage.setItem('isAuthenticated', false)
      setAuthenticated(false)
    }
  }

  const handleUsername = (event) => {
    event.preventDefault()
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    event.preventDefault()
    setPassword(event.target.value)
  }

  const handleBulb = () => {
    setBulbOn(!bulbOn)
  }

  return (
      <Main>
          <PortalMain>
              <div>
                  <TitleApp>HOTEL MIRANDA <SubtitleApp>DASHBOARD</SubtitleApp></TitleApp>
              </div>
              <BulbIcon>
                  <MdLightbulb color='yellow' size={25} onClick={handleBulb} />
              </BulbIcon>
              {bulbOn
                ? <ModalWrapper onClick={handleBulb}>
                    <ModalContent>
                        <ModalText>User    -----&gt; employer</ModalText>
                        <ModalText>Password -&gt; 1234</ModalText>
                    </ModalContent>
                  </ModalWrapper>
                : ''}
              <FormLogin onSubmit={handleLogin}>
                  <div>
                      <LabelLogin htmlFor='user'>User</LabelLogin>
                      <InputLogin type='text' name='user' id='user' value={username} onChange={handleUsername} />
                  </div>
                  <div>
                      <LabelLogin htmlFor='password'>Password</LabelLogin>
                      <InputLogin type='password' name='password' id='password' value={password} onChange={handlePassword} />
                  </div>
                  {(isAuthenticated || isAuthenticated === null)
                    ? ''
                    : <div> <SpanError>Passwords do not match. Please verify and try again.</SpanError> </div>}

                  <ButtonLogin type='submit'>LOG IN</ButtonLogin>
              </FormLogin>
          </PortalMain>
      </Main>
  )
}
