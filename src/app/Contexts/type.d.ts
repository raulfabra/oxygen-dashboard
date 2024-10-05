import { TypeAuthAction, TypeAuthState, TypePaginationAction, TypePaginationState } from "../Providers/type";

export interface TypeAuthContext {
  authState: TypeAuthState;
  authDispatch: React.Dispatch<TypeAuthAction>;
}

export interface TypePaginationContext {
  paginationState: TypePaginationState;
  paginationDispatch: React.Dispatch<TypePaginationAction>;
}
