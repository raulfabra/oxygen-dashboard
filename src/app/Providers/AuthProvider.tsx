import { ReactNode, useEffect, useReducer } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { TypeAuthAction, TypeAuthState } from "./type";

const initialState: TypeAuthState = {
  email: "",
  password: "",
  token: "",
};

const authReducer = (state: TypeAuthState, action: TypeAuthAction) => {
  switch (action.type) {
    case "login":
      return { ...state, email: action.payload.email, password: action.payload.password, token: action.payload.token };
    case "logout":
      return { ...state, email: "", password: "", token: "" };
    case "updateUser":
      return { ...state, email: action.payload.email, password: action.payload.password };
    default:
      return state;
  }
};

const savedStorage = () => {
  const userStorage = sessionStorage.getItem("user");
  return userStorage ? JSON.parse(userStorage) : initialState;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, savedStorage);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  return <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>{children}</AuthContext.Provider>;
};
