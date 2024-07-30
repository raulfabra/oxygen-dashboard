import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from './utils/ProtectedRoutes'
import { Login } from './pages/Login'
import { Rooms } from './pages/Rooms'
import { Bookings } from './pages/Bookings'
import { SimpleBook } from './pages/SimpleBook'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'
import { Contact } from './pages/Contact'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='rooms' element={<Rooms />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='bookings/:id' element={<SimpleBook />} />
          <Route path='users' element={<Users />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
