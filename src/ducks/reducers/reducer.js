import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  categories: [],
  chosenCategories: [],
  categoryProducts: [],
  posts: [],
  users: [],
  countries:[],
  filteredProductsByCategory: [],
};

export default function Product(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: action.payload };

    case actionTypes.GET_POSTS:
      return { ...state, posts: action.payload };

    case actionTypes.GET_USERS:
      return { ...state, users: action.payload };

    case actionTypes.GET_COUNTRIES:
      return { ...state, countries: action.payload };

    case actionTypes.GET_CATEGORY_PRODUCTS:
      return {
        ...state,
        categoryProducts: state.products.filter(
          (product) => product.categoryId === action.payload
        ),
      };
    case actionTypes.CHOOSE_CATEGORIES:

      if 
      (action.info === "add category") {
        return {
          ...state,
          chosenCategories: [...state.chosenCategories, action.payload],
        };
      } 

      else if (action.info === "remove category") {
        return {
          ...state,
          chosenCategories: state.chosenCategories.filter((e, i) => i !== action.index)
          // setChosenCategories((prevState) => (prevState = prevState.filter((e, i) => i !== index)));
        };
      }
      break;

    // case actionTypes.FILTER_PRODUCTS_BY_CATEGORY:
    //   return {
    //     ...state,
    //     filteredProductsByCategory: state.products.filter(e => e)

    //   }
    // case "LOADING":
    //   return {...state, [action.payload]:["loading"]}
    default:
      return state;
  }
}
