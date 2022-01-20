const initialState = {
  someValue: {},
};

export default function Product(state = initialState, action) {
  switch (action.type) {
    case "ALGO":
      return { state };

    default:
      return state;
  }
}
