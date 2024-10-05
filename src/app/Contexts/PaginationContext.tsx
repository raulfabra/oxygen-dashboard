import { createContext } from "react";
import { TypePaginationContext } from "./type";

export const PaginationContext = createContext<TypePaginationContext | null>(null);
