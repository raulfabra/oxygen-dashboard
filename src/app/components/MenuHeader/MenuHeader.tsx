import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoginActions } from "../../../Users/hooks/useLoginActions";
import { Div, Nav, NavWrapper, TitleNavBar } from "./styleMenuHeader";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const MenuHeader = () => {
  const [titleNavbar, setTitleNavbar] = useState("Dashboard");
  const location = useLocation();
  const { handleLogout } = useLoginActions();

  useEffect(() => {
    const newTitle = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(1).slice(1);
    switch (true) {
      case newTitle.includes("Booking/"):
        setTitleNavbar("Booking Details");
        break;
      case newTitle.includes("Room/"):
        setTitleNavbar("Room Name");
        break;
      case newTitle.includes("User/"):
        setTitleNavbar("User");
        break;
      default:
        setTitleNavbar(newTitle);
        break;
    }
  }, [location.pathname]);
  return (
    <Nav>
      <NavWrapper>
        <Div>
          <TitleNavBar>{titleNavbar}</TitleNavBar>
        </Div>
        <Div>
          <MdOutlineEmail size={25} color="#135846" />
          <IoMdNotificationsOutline size={25} color="#135846" />
          <IoLogOut size={25} color="#135846" style={{ cursor: "pointer" }} onClick={handleLogout} />
        </Div>
      </NavWrapper>
    </Nav>
  );
};
