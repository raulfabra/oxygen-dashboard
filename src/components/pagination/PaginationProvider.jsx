import { useReducer } from "react";
import { PaginationContext } from "./PaginationContext";

const initialState = {
  currentPage: 1,
};

//retornarEstado (state que en principio es initialState) y la (action) que afeta al state
const paginationReducer = (state, action) => {
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

export const PaginationProvider = ({ children }) => {
  const [currentPageState, dispatch] = useReducer(paginationReducer, initialState);

  return (
    <PaginationContext.Provider value={{ currentPageState: currentPageState.currentPage, currentPageDispatch: dispatch }}>
      {children}
    </PaginationContext.Provider>
  );
};
