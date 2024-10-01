import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../app/Contexts/AuthContext";
import { MenuMouseHover } from "../types/global";
import { RiUserSharedFill, RiContactsBook3Fill } from "react-icons/ri";
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard, MdOutlineEmail, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { VscArrowSwap } from "react-icons/vsc";
import { LuCalendarCheck } from "react-icons/lu";
import { TfiKey } from "react-icons/tfi";
import iconHotel from "../assets/noun-hotel.svg";
import {
  Div,
  DivColumn,
  FooterSubtitle,
  FooterTitle,
  FooterWrapper,
  ItemName,
  ItemSelect,
  ItemWrapper,
  MenuWrapper,
  Nav,
  NavWrapper,
  SettingButton,
  SquarePhoto,
  Subtitle,
  Title,
  TitleNavBar,
  TitleWrapper,
  UserEmail,
  UserName,
  UserWrapper,
} from "../styles/StylesComponts";

export const Layout = () => {
  // Lógica del Menú
  const [titleNavbar, setTitleNavbar] = useState("Dashboard");
  const [isVisible, setIsVisible] = useState(true);
  const [isHoverMenuItems, setHoverMenuItems] = useState<MenuMouseHover>({});
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement;
    const item: string | null = target.getAttribute("datatype");
    setHoverMenuItems((prev) => ({ ...prev, item: true })); // Change [item]:true -> item:true ??
  };
  const handleMouseLeave = (event: SyntheticEvent) => {
    const target = event.target as HTMLElement;
    const item = target.getAttribute("datatype");
    setHoverMenuItems((prev) => ({ ...prev, item: false })); // Change [item]:true -> item:true ??
  };

  const handleLogOut = () => {
    context?.authDispatch({ type: "logout", payload: { fullName: "", email: "", password: "", authentication: false } });
  };

  useEffect(() => {
    const newTitle = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(1).slice(1);
    switch (true) {
      case newTitle.includes("Bookings/"):
        setTitleNavbar("Booking Details");
        break;
      case newTitle.includes("Rooms/"):
        setTitleNavbar("Room Name");
        break;
      case newTitle.includes("Users/"):
        setTitleNavbar("User");
        break;
      default:
        setTitleNavbar(newTitle);
        break;
    }
  }, [location.pathname]);

  return (
    <>
      {isVisible ? (
        <MenuWrapper $isOpen={isVisible}>
          <TitleWrapper>
            <img src={iconHotel} alt="iconHotel" width={120} height={80} />
            <DivColumn>
              <Title>travl</Title>
              <Subtitle>Hotel Admin Dashboard</Subtitle>
            </DivColumn>
          </TitleWrapper>

          <ItemWrapper datatype="dashboard" onClick={() => navigate("/dashboard")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHoverMenuItems.dashboard} />
            <MdDashboard />
            <ItemName datatype="dashboard"> Dashboard </ItemName>
          </ItemWrapper>

          <ItemWrapper datatype="rooms" onClick={() => navigate("/rooms")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHoverMenuItems.rooms} />
            <TfiKey />
            <ItemName datatype="rooms"> Room </ItemName>
            <MdOutlineKeyboardArrowDown style={{ position: "absolute", left: "80%" }} />
          </ItemWrapper>

          <ItemWrapper datatype="bookings" onClick={() => navigate("/bookings")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHoverMenuItems.bookings} />
            <LuCalendarCheck />
            <ItemName datatype="bookings"> Bookings </ItemName>
          </ItemWrapper>

          <ItemWrapper datatype="users" onClick={() => navigate("/users")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHoverMenuItems.users} />
            <RiUserSharedFill />
            <ItemName datatype="users"> Users </ItemName>
          </ItemWrapper>

          <ItemWrapper datatype="customers" onClick={() => navigate("/customers")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHoverMenuItems.customers} />
            <RiContactsBook3Fill />
            <ItemName datatype="customers"> Customer </ItemName>
          </ItemWrapper>

          <UserWrapper>
            <SquarePhoto>
              <img src="" alt="" style={{ objectFit: "contain", width: "100%", height: "100%" }} />
            </SquarePhoto>
            <UserName> Williams Johnsoon</UserName>
            <UserEmail> williams@gmail.com</UserEmail>
            <SettingButton>
              {" "}
              <IoMdSettings onClick={() => navigate("/")} />{" "}
            </SettingButton>
          </UserWrapper>

          <FooterWrapper>
            <FooterTitle>Travl Hotel Admin Dashboard</FooterTitle>
            <FooterSubtitle>© 2020 All Rights Reserved</FooterSubtitle>
            <FooterSubtitle $variant="p.top">Made with ♥ by Peterdraw</FooterSubtitle>
          </FooterWrapper>
        </MenuWrapper>
      ) : (
        ""
      )}
      <Nav $large={isVisible} $isOpen={isVisible}>
        <NavWrapper>
          <Div>
            <VscArrowSwap size={25} style={{ cursor: "pointer" }} onClick={() => setIsVisible(!isVisible)} />
            <TitleNavBar>{titleNavbar}</TitleNavBar>
          </Div>
          <Div>
            <MdOutlineEmail size={25} color="#135846" />
            <IoMdNotificationsOutline size={25} color="#135846" />
            <IoLogOut size={25} color="#135846" style={{ cursor: "pointer" }} onClick={handleLogOut} />
          </Div>
        </NavWrapper>
      </Nav>
      <Outlet />
    </>
  );
};
