import { MenuHeader } from "./app/components/MenuHeader/MenuHeader";
import { MenuLateral } from "./app/components/MenuLateral/MenuLateral";
import { Main } from "./styleLayout";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <MenuLateral />
      <MenuHeader />
      <Main $layout>
        <Outlet />
      </Main>
    </>
  );
};
