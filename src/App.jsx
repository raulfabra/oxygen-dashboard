import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Rooms } from "./pages/Rooms";
import { NewRoom } from "./pages/NewRoom";
import { Bookings } from "./pages/Bookings";
import { BookingDetails } from "./pages/BookingDetails";
import { Users } from "./pages/Users";
import { UserDetails } from "./pages/UserDetails";
import { NewUser } from "./pages/NewUser";
import { Contact } from "./pages/Contact";
import { Layout } from "./pages/Layout";
import { NewBooking } from "./pages/NewBooking";
import { RoomDetails } from "./pages/RoomDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="users" element={<Users />} />
          <Route path="createBooking" element={<NewBooking />} />
          <Route path="createRoom" element={<NewRoom />} />
          <Route path="createUser" element={<NewUser />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="bookings/:id" element={<BookingDetails />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
