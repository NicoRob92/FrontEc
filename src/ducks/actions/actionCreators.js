import faker from "faker"
import * as actionTypes from "./actionTypes"


const api ="http://localhost:4000/api/"

const getProductsUrl = api + "products"
const getPostsUrl = api + "Post"
const getCategoriesUrl = api + "category"
const getUsersUrl = api+"users"
const getCountriesUrl = api + "countries"

export function getProducts() {
    return function(dispatch) {
    //   dispatch({ type: "LOADING", payload: "products" });
      return fetch(getProductsUrl)
          .then(response => response.json())
          .then(json => {  
                json.forEach(e => {e.image = faker.image.image(350,350,true)})
              dispatch({ type: actionTypes.GET_PRODUCTS, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}

export function getProductsByName(name) {
    return function(dispatch) {
    //   dispatch({ type: "LOADING", payload: "products" });
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
        // dispatch({ type: "LOADING", payload: "categories" });
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
    //   dispatch({ type: "LOADING", payload: "posts" });
      return fetch(getPostsUrl)
          .then(response => response.json())
          .then(json => {                   
              dispatch({ type: actionTypes.GET_POSTS, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}

export function getCountries() {
    return function(dispatch) {
    //   dispatch({ type: "LOADING", payload: "posts" });
      return fetch(getCountriesUrl)
          .then(response => response.json())
          .then(json => {                   
              dispatch({ type: actionTypes.GET_COUNTRIES, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}


export function getUsers() {
    return function(dispatch) {
    //   dispatch({ type: "LOADING", payload: "users" });
      return fetch(getUsersUrl)
          .then(response => response.json())
          .then(json => {                   
              dispatch({ type: actionTypes.GET_USERS, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}
export function chooseCategories(category,info,index) {
    console.log(category,info)
    return {
        type: actionTypes.CHOOSE_CATEGORIES,
        payload: category,
        info,
        index
    }
}

export function filterProductsByCategory (category) {
    return {
        type: actionTypes.FILTER_PRODUCTS_BY_CATEGORY,
        payload: category
    }
}

export function getCategoryProducts(categoryId){
    return {type: actionTypes.GET_CATEGORY_PRODUCTS, payload:categoryId}
}
