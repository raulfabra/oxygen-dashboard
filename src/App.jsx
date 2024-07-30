import { Route, Routes, useLocation } from 'react-router-dom'
import { ProtectedRoutes } from './utils/ProtectedRoutes'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Rooms } from './pages/Rooms/Rooms'
import { NewRoom } from './pages/Rooms/NewRoom'
import { SettingRoom } from './pages/Rooms/SettingRoom'
import { Bookings } from './pages/Bookings/Bookings'
import { BookingDetails } from './pages/Bookings/BookingDetails'
import { Users } from './pages/Users/Users'
import { UserDetails } from './pages/Users/UserDetails'
import { SettingUser } from './pages/Users/SettingUser'
import { Employers } from './pages/Employers'
import { Menu } from './components/Menu'
import { Navbar } from './components/Navbar'

function App () {
  const location = useLocation()

  const showComponents = location.pathname !== '/'

  return (
    <>
      {showComponents && <Menu />}
      {showComponents && <Navbar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Menu />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='rooms' element={<Rooms />} />
          <Route path='createRoom' element={<NewRoom />} />
          <Route path='rooms/:id' element={<SettingRoom />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='bookings/:id' element={<BookingDetails />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetails />} />
          <Route path='settings/:id' element={<SettingUser />} />
          <Route path='employers' element={<Employers />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
