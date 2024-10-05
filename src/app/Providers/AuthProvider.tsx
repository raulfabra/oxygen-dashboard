import { ReactNode, useEffect, useReducer } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { TypeAuthAction, TypeAuthState } from "./type";

const initialState: TypeAuthState = {
  fullName: "",
  email: "",
  password: "",
  authentication: false,
};

const authReducer = (state: TypeAuthState, action: TypeAuthAction) => {
  switch (action.type) {
    case "login":
      return { ...state, fullName: action.payload.fullName, email: action.payload.email, password: action.payload.password, authentication: true };
    case "logout":
      return { ...state, fullName: "", email: "", password: "", authentication: false };
    case "updateUser":
      return { ...state, email: action.payload.email, password: action.payload.password };
    default:
      return state;
  }
};

const savedStorage = () => {
  const storedData = localStorage.getItem("authState");
  return storedData ? JSON.parse(storedData) : initialState;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, savedStorage);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  return <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>{children}</AuthContext.Provider>;
};
