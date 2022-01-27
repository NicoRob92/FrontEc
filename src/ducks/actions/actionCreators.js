import faker from "faker"
import axios from 'axios'
import * as actionTypes from "./actionTypes"


const api ="http://localhost:4000/api/"

const getPostsUrl = api + "post"
const getCategoriesUrl = api + "category"
const getUsersUrl = api+"users"
const getCountriesUrl = api + "countries"



export function getPosts() {
    return function(dispatch) {
      return fetch(getPostsUrl)
          .then(response => response.json())
          .then(json => {                   
              json.forEach(e => {e.image = faker.image.image(350,350,true)})
              dispatch({ type: actionTypes.GET_POST, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}

export function getPostsByName(name) {
    return function(dispatch) {
      return fetch(getPostsUrl+"?name="+name)
          .then(response => response.json())
          .then(json => {                   
            json.forEach(e => {e.image = faker.image.image(350,350,true)})
                                  
          })
          .catch(e=>console.error(e))
    };
}

export function getCategories (){
    return function(dispatch) {
        return fetch(getCategoriesUrl)
            .then(response => response.json())
            .then(json => {                   
                dispatch({ type: actionTypes.GET_CATEGORIES, payload: json });                      
            })
            .catch(e=>console.error(e))
      };
}

export function getCountries() {
    return function(dispatch) {
      return fetch(getCountriesUrl)
          .then(response => response.json())
          .then(json => {                   
              dispatch({ type: actionTypes.GET_COUNTRIES, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}


export function getPostById(id) {
    return function(dispatch) {
      return fetch(getPostsUrl+"/"+id)
          .then(response => response.json())
          .then(json => {                   
              dispatch({ type: actionTypes.GET_POST, payload: json });                      
          })
          .catch(e=>console.error(e))
    };
}

export function create_post(payload) {
    return async () => {
      return await fetch(getPostsUrl, {
        method: "POST",
        body: payload,
      }).catch((e) => console.error(e));
    };
}
/* 
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
} */
export function chooseCategories(category,info,index) {
    return {
        type: actionTypes.CHOOSE_CATEGORIES,
        payload: category,
        info,
        index
    }
}

export function resetCategories () {
    return {
        type: actionTypes.RESET_CATEGORIES
    }
}

export function filterPostByCategory () {
    return {
        type: actionTypes.FILTER_POST_BY_CATEGORY,
    }
}

export function getCategoryPost(categoryId){
    return {type: actionTypes.GET_CATEGORY_POST, payload:categoryId}
}

