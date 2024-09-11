import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Layout } from "./pages/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Bookings } from "./pages/Bookings/Bookings";
import { BookingDetails } from "./pages/Bookings/BookingDetails";
import { NewBooking } from "./pages/Bookings/NewBooking";
import { Rooms } from "./pages/Rooms/Rooms";
import { RoomDetails } from "./pages/Rooms/RoomDetails";
import { NewRoom } from "./pages/Rooms/NewRoom";
import { Users } from "./pages/Users/Users";
import { UserDetails } from "./pages/Users/UserDetails";
import { NewUser } from "./pages/Users/NewUser";

export const PaginationContext = React.createContext();

function App() {
  return (
    <BrowserRouter>
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
          <Route path="rooms/:roomId" element={<RoomDetails />} />
          <Route path="bookings/:bookingId" element={<BookingDetails />} />
          <Route path="users/:userId" element={<UserDetails />} />
          <Route path="contact" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
