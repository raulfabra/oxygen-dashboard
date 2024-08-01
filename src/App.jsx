import { Navigate, Route, Routes } from 'react-router-dom'
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
import { Contact } from './pages/Contact'
import { Layout } from './pages/Layout'
import { NewBooking } from './pages/Bookings/NewBooking'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="createRoom" element={<NewRoom />} />
          <Route path="rooms/:id" element={<SettingRoom />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="createBooking" element={<NewBooking />} />
          <Route path="bookings/:id" element={<BookingDetails />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="settings/:id" element={<SettingUser />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
