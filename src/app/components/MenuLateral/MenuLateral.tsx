import {
  DivColumn,
  FooterSubtitle,
  FooterTitle,
  FooterWrapper,
  ItemName,
  ItemSelect,
  ItemWrapper,
  MenuWrapper,
  SettingButton,
  SquarePhoto,
  Subtitle,
  Title,
  TitleWrapper,
  UserEmail,
  UserName,
  UserWrapper,
} from "./styleMenuLat";
import { IoMdSettings } from "react-icons/io";
import { LuCalendarCheck } from "react-icons/lu";
import { TfiKey } from "react-icons/tfi";
import iconHotel from "../../assets/noun-hotel.svg";
import { RiUserSharedFill, RiContactsBook3Fill } from "react-icons/ri";
import { MdDashboard, MdOutlineEmail, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { MenuMouseHover } from "./type";
import { useNavigate } from "react-router-dom";

export function MenuLateral() {
  const navigate = useNavigate();
  const [isHoverMenuItems, setHoverMenuItems] = useState<MenuMouseHover>({});

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    const item: string | null = event.currentTarget.getAttribute("datatype");
    setHoverMenuItems((prev) => ({ ...prev, item: true })); // Change [item]:true -> item:true ??
  };
  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    const item = event.currentTarget.getAttribute("datatype");
    setHoverMenuItems((prev) => ({ ...prev, item: false })); // Change [item]:true -> item:true ??
  };
  return (
    <>
      <MenuWrapper>
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

        <ItemWrapper datatype="rooms" onClick={() => navigate("/room")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ItemSelect $isVisible={isHoverMenuItems.rooms} />
          <TfiKey />
          <ItemName datatype="rooms"> Room </ItemName>
          <MdOutlineKeyboardArrowDown style={{ position: "absolute", left: "80%" }} />
        </ItemWrapper>

        <ItemWrapper datatype="bookings" onClick={() => navigate("/booking")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ItemSelect $isVisible={isHoverMenuItems.bookings} />
          <LuCalendarCheck />
          <ItemName datatype="bookings"> Bookings </ItemName>
        </ItemWrapper>

        <ItemWrapper datatype="users" onClick={() => navigate("/user")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ItemSelect $isVisible={isHoverMenuItems.users} />
          <RiUserSharedFill />
          <ItemName datatype="users"> Users </ItemName>
        </ItemWrapper>

        <ItemWrapper datatype="customers" onClick={() => navigate("/customer")} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ItemSelect $isVisible={isHoverMenuItems.customers} />
          <RiContactsBook3Fill />
          <ItemName datatype="customers"> Customer </ItemName>
        </ItemWrapper>

        <UserWrapper>
          <SquarePhoto>
            <img src="/public/chaval.jpg" alt="Person" style={{ objectFit: "contain", width: "100%", height: "100%" }} />
          </SquarePhoto>
          <UserName> Williams Johnsoon</UserName>
          <UserEmail> williams@gmail.com</UserEmail>
          <SettingButton onClick={() => navigate("/user/details")}>
            <IoMdSettings />
          </SettingButton>
        </UserWrapper>

        <FooterWrapper>
          <FooterTitle>Travl Hotel Admin Dashboard</FooterTitle>
          <FooterSubtitle>© 2020 All Rights Reserved</FooterSubtitle>
          <FooterSubtitle $variant="p.top">Made with ♥ by Peterdraw</FooterSubtitle>
        </FooterWrapper>
      </MenuWrapper>
    </>
  );
}
