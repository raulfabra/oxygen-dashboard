export const initialState = 1;
export const pagination = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return (state = action.id);
  }
};
