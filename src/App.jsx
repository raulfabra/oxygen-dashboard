import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard.jsx'
import { Bookings } from './pages/Bookings.jsx'
import { Users } from './pages/Users.jsx'
import { Rooms } from './pages/Rooms.jsx'
import { Contact } from './pages/Contact.jsx'
import { SimpleBook } from './pages/SimpleBook.jsx'
import './App.css'

function App () {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/rooms' element={<Rooms />} />
      <Route path='/booking' element={<Bookings />} />
      <Route path='/booking/:id' element={<SimpleBook />} />
      <Route path='/users' element={<Users />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App
