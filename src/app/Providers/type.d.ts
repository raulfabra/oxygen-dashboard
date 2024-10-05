export interface TypeAuthState {
  fullName: string;
  email: string;
  password: string;
  authentication: boolean;
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
