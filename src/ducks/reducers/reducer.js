import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  chosenCategories: [],
  categoryPost: [],
  posts: [],
  users: [],
  countries:[],
  filteredPostByCategory: [],
  postById: []
};

export default function Product(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POST:
      return { ...state, post: action.payload };

    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case actionTypes.GET_USERS:
      return { ...state, users: action.payload };

    case actionTypes.GET_COUNTRIES:
      return { ...state, countries: action.payload };

    case actionTypes.GET_CATEGORY_POST:
      return {
        ...state,
        categoryPost: state.posts.filter((post) => post.categoryId === action.payload),
      };
    case actionTypes.GET_POST_BY_ID:
      return {
        ...state,
        postById: action.payload
      }

    case actionTypes.CHOOSE_CATEGORIES:
      if (action.info === "add category") {
        return {
          ...state,
          chosenCategories: [...state.chosenCategories, action.payload],
        };
      } else if (action.info === "remove category") {
        return {
          ...state,
          chosenCategories: state.chosenCategories.filter((e, i) => i !== action.index)
        };
      }
      break;
    case actionTypes.RESET_CATEGORIES: 
      return {
        ...state,
        chosenCategories: []
      }
    case actionTypes.FILTER_POST_BY_CATEGORY:
      return {
        ...state,
        filteredPostByCategory: state.post.filter((post) => {
        const categoriesInOrder = state.chosenCategories.sort();
        if (categoriesInOrder.toString().includes(post.categoryId.toString())) return true;
        else return false;
      })
    }
    default:
      return state;
  }
}
