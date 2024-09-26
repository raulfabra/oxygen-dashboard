import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export const AuthProtect = () => {
  const context = useContext(AuthContext);

  return <>{context.authState.authentication ? <Outlet /> : <Navigate to="/login" replace />}</>;
};
