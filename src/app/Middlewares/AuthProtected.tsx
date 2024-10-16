import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export const AuthProtected = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthMiddleware debe estar envuelto dentro de AuthProvider");
  }

  return <>{context.authState.token !== "" ? <Outlet /> : <Navigate to="/login" replace />}</>;
};
