import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export const AuthProtect = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthMiddleware debe estar envuelto dentro de AuthProvider");
  }

  return <>{context.authState.authentication ? <Outlet /> : <Navigate to="/login" replace />}</>;
};
