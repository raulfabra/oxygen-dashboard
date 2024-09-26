import { useEffect, useReducer } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const initialState = {
  authentication: false,
  email: "",
  fullName: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, authentication: true, email: action.payload.email, fullName: action.payload.name };
    case "logout":
      return { ...state, authentication: false, email: "", fullName: "" };
    case "updateUser":
      return { ...state, email: action.payload.email, fullName: action.payload.name };
    default:
      return state;
  }
};

const savedStorage = () => {
  const storedData = localStorage.getItem("authState");
  return storedData ? JSON.parse(storedData) : initialState;
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, savedStorage);

  useEffect(() => {
    console.log("Hola me estoy actualizando");
    console.log(state);
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  return <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>{children}</AuthContext.Provider>;
};
