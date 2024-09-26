import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProtect } from "./app/Middlewares/AuthProtect.js";
import { Login } from "./pages/Login.js";
import { Layout } from "./pages/Layout.js";
import { Dashboard } from "./pages/Dashboard.js";
import { Bookings } from "./pages/Bookings/Bookings.js";
import { BookingDetails } from "./pages/Bookings/BookingDetails.js";
import { NewBooking } from "./pages/Bookings/NewBooking.js";
import { Rooms } from "./pages/Rooms/Rooms.js";
import { RoomDetails } from "./pages/Rooms/RoomDetails.js";
import { NewRoom } from "./pages/Rooms/NewRoom.js";
import { Users } from "./pages/Users/Users.js";
import { UserDetails } from "./pages/Users/UserDetails.js";
import { NewUser } from "./pages/Users/NewUser.js";
import { Customers } from "./pages/Customers/Customers.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthProtect />}>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings/:bookingId" element={<BookingDetails />} />
            <Route path="createBooking" element={<NewBooking />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="rooms/:roomId" element={<RoomDetails />} />
            <Route path="createRoom" element={<NewRoom />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:userId" element={<UserDetails />} />
            <Route path="createUser" element={<NewUser />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
