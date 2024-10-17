import { SyntheticEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../app/Contexts/AuthContext";
import { useAppDispatch } from "../../app/utils/storetsc";
import { loginThunk } from "../redux/userThunk";

export const useLoginActions = () => {
  const [showMessageCredentialsError, setMessageCredentialsError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCheckBoxRemember = (event: React.ChangeEvent<HTMLInputElement>, email: string, password: string) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      localStorage.setItem("account", JSON.stringify({ email, password }));
    } else {
      localStorage.removeItem("account");
    }
  };

  const handleLogin = async (event: SyntheticEvent, email: string, password: string) => {
    event.preventDefault();

    const data = await dispatch(loginThunk({ email, password }));
    // Si el login es exitoso, puedes guardar el token y redirigir
    if (data.payload !== undefined) {
      context?.authDispatch({ type: "login", payload: { email, password, token: data.payload.token } });
      navigate("/dashboard");
    } else {
      context?.authDispatch({ type: "logout", payload: { email: "", password: "", token: "" } });
      setMessageCredentialsError(true);
    }
  };

  const handleLogout = () => {
    context?.authDispatch({ type: "logout", payload: { email: "", password: "", token: "" } });
  };

  return { handleCheckBoxRemember, handleLogin, handleLogout, showMessageCredentialsError, isChecked };
};
