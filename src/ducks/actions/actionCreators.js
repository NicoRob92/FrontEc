import * as actionTypes from "./actionTypes"

const api ="http://localhost:4000/api/"

const getProductsUrl = api + "products"
const getPostsUrl = api + "Post"
const getCategoriesUrl = api + "category"


export function getProducts() {
    return function(dispatch) {
      dispatch({ type: "LOADING", payload: "products" });
      return fetch(getProductsUrl)
          .then(response => response.json())
          .then(json => {                   
              dispatch({ type: actionTypes.GET_PRODUCTS, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}

export function getProductsByName(name) {
    return function(dispatch) {
      dispatch({ type: "LOADING", payload: "products" });
      return fetch(getProductsUrl+"?name="+name)
          .then(response => response.json())
          .then(json => {                   
              dispatch({ type: actionTypes.GET_PRODUCTS, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}

export function getCategories (){
    return function(dispatch) {
        dispatch({ type: "LOADING", payload: "categories" });
        return fetch(getCategoriesUrl)
            .then(response => response.json())
            .then(json => {                   
                dispatch({ type: actionTypes.GET_CATEGORIES, payload: json });                      
            })
            .catch(e=>console.error(e))
      };
}

export function getPosts() {
    return function(dispatch) {
      dispatch({ type: "LOADING", payload: "posts" });
      return fetch(getPostsUrl)
          .then(response => response.json())
          .then(json => {                   
              dispatch({ type: actionTypes.GET_POSTS, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}


export function getCategoryProducts(categoryId){
    return {type: actionTypes.GET_CATEGORY_PRODUCTS, payload:categoryId}
}