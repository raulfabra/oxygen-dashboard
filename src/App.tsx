import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Users/pages/Login";
import { Layout } from "./Layout";
import { AuthProtected } from "./app/Middlewares/AuthProtected";
import { Dashboard } from "./Dashboard/Dashboard";
import { Customers } from "./Customers/Customers";
import { BookingTable } from "./Bookings/pages/BookingTable";
import { BookingDetails } from "./Bookings/pages/BookingDetails";
import { RoomTable } from "./Rooms/pages/RoomTable";
import { RoomDetails } from "./Rooms/pages/RoomDetails";
import { UserTable } from "./Users/pages/UserTable";
import { UserDetails } from "./Users/pages/UserDetails";
import { Sign } from "./Users/pages/Sign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="sign" element={<Sign />} />
        <Route element={<AuthProtected />}>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="booking" element={<BookingTable />} />
            <Route path="booking/:id" element={<BookingDetails />} />
            {/* <Route path="createBooking" element={<NewBooking />} /> */}
            <Route path="room" element={<RoomTable />} />
            <Route path="room/:id" element={<RoomDetails />} />
            {/* <Route path="createRoom" element={<NewRoom />} /> */}
            <Route path="user" element={<UserTable />} />
            <Route path="user/:id" element={<UserDetails />} />
            {/* <Route path="createUser" element={<NewUser />} /> */}
            <Route path="customer" element={<Customers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
