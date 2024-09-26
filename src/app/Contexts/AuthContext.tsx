import { createContext } from "react";
import { AuthInterface } from "../../types/global";

export const AuthContext = createContext<null | AuthInterface>(null);
