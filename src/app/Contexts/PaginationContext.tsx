import { createContext } from "react";
import { PageInterface } from "../../types/global";

export const PaginationContext = createContext<null | PageInterface>(null);
