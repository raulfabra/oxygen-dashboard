export const initialState = 1;
export const pagination = (state, action) => {
  switch (action.type) {
    case "increment":
      if (state < action.id) return state + 1;
      else return state;
    case "decrement":
      if (state > action.id) return state - 1;
      else return state;
    default:
      return (state = action.id);
  }
};
