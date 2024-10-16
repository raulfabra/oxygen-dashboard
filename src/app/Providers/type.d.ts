export interface TypeAuthState {
  email: string;
  password: string;
  token: string;
}
export interface TypeAuthAction {
  payload: TypeAuthState;
  type: string;
}

export interface TypePaginationState {
  currentPage: number;
}
export interface TypePaginationAction {
  payload: number;
  type: string;
}
