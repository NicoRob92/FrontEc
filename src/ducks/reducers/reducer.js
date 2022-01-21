import * as actionTypes from "../actions/actionTypes"

const initialState = {
  products: [],
  categories: [],
  categoryProducts:[],
  posts: [],
};

export default function Product(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: action.payload };

    case actionTypes.GET_POSTS:
      return { ...state, posts: action.payload };

    case actionTypes.GET_CATEGORY_PRODUCTS:
      return {...state, 
        categoryProducts:state.products
        .filter(product=>product.categoryId==action.payload)
      }
    case "LOADING":
      return {...state, [action.payload]:["loading"]}
    default:
      return state;
  }
}
