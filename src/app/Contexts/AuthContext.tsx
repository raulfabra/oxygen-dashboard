import { createContext } from "react";
import { TypeAuthContext } from "./type";

export const AuthContext = createContext<TypeAuthContext | null>(null);
