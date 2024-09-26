import { useEffect, useReducer } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { auth, AuthAction, Props } from "../../types/global";

const initialState: auth = {
  fullName: "",
  email: "",
  password: "",
  authentication: false,
};

const authReducer = (state: auth, action: AuthAction) => {
  switch (action.type) {
    case "login":
      return { ...state, authentication: true, email: action.payload.email, password: action.payload.password };
    case "logout":
      return { ...state, authentication: false, email: "", password: "" };
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

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, savedStorage);

  useEffect(() => {
    console.log("Hola me estoy actualizando");
    console.log(state);
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  return <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>{children}</AuthContext.Provider>;
};
