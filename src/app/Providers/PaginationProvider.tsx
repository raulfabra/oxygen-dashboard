import { ReactNode, useReducer } from "react";
import { PaginationContext } from "../Contexts/PaginationContext";
import { TypePaginationAction, TypePaginationState } from "./type";

const initialState = {
  currentPage: 1,
};

//retornarEstado (state que en principio es initialState) y la (action) que afeta al state
const paginationReducer = (state: any, action: TypePaginationAction) => {
  switch (action.type) {
    case "increment":
      if (state.currentPage < action.payload) return { ...state, currentPage: state.currentPage + 1 };
      else return state;
    case "decrement":
      if (state.currentPage > action.payload) return { ...state, currentPage: state.currentPage - 1 };
      else return state;
    case "direct":
      return { ...state, currentPage: (state.currentPage = action.payload) };
    default:
      return state;
  }
};

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(paginationReducer, initialState);

  return <PaginationContext.Provider value={{ paginationState: state, paginationDispatch: dispatch }}>{children}</PaginationContext.Provider>;
};
