import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// User Validate Hardcoded
const validUsername = 'employer'
const validPassword = '1234'

export const Login = () => {
  const [isAuthenticated, setAuthenticated] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

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

  return (
    <main>
      <div>
        <h1>HOTEL MIRANDA DASHBOARD for employers</h1>
        <h2>Introduce tus datos</h2>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='user'>User</label>
          <input type='text' name='user' id='user' value={username} onChange={handleUsername} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={password} onChange={handlePassword} />
        </div>
        {(isAuthenticated || isAuthenticated === null)
          ? ''
          : <div> <span>The login fields are incorrect</span> </div>}

        <button type='submit'>LOG IN</button>
      </form>
    </main>
  )
}
