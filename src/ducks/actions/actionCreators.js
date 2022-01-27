import faker from "faker";
import * as actionTypes from "./actionTypes";

const api = "http://localhost:4000/api/";

const getPostsUrl = api + "post";
const getPostByIdUrl = api + "posts";
const getCategoriesUrl = api + "category";
const getUsersUrl = api + "users";
const getCountriesUrl = api + "countries";

export function getPosts() {
  return function (dispatch) {
    fetch(getPostsUrl)
      .then((response) => response.json())
      .then((json) => {
        json.forEach((e) => {
          e.image = faker.image.image(350, 350, true);
        });
        dispatch({ type: actionTypes.GET_POSTS, payload: json });
      })
      .catch((e) => console.error(e));
  };
}

export function getPostsByName(name) {
  return function (dispatch) {
    return fetch(getPostsUrl + "?name=" + name)
      .then((response) => response.json())
      .then((json) => {
        json.forEach((e) => {
          e.image = faker.image.image(350, 350, true);
        });
        dispatch({ type: actionTypes.GET_POSTS, payload: json });
      })
      .catch((e) => console.error(e));
  };
}
export function getPostById(id) {
  return function (dispatch) {
    fetch(getPostByIdUrl + "/" + id)
      .then((res) => res.json())
      .then((res) => {
        while (res.Images.length < 5) {
          res.Images = [...res.Images, faker.image.image(350, 350, true)];
        }
        return res;
      })
      .then((json) => {
        dispatch({
          type: actionTypes.GET_POST_BY_ID,
          payload: json,
        });
      })
      .catch((e) => console.error(e));
  };
}

export function getCategories() {
  return function (dispatch) {
    return fetch(getCategoriesUrl)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: actionTypes.GET_CATEGORIES, payload: json });
      })
      .catch((e) => console.error(e));
  };
}

export function getCountries() {
  return function (dispatch) {
    return fetch(getCountriesUrl)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: actionTypes.GET_COUNTRIES, payload: json });
      })
      .catch((e) => console.error(e));
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

export function getUsers() {
  return function (dispatch) {
    return fetch(getUsersUrl)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: actionTypes.GET_USERS, payload: json });
      })
      .catch((e) => console.error(e));
  };
}
export function chooseCategories(category, info, index) {
  return {
    type: actionTypes.CHOOSE_CATEGORIES,
    payload: category,
    info,
    index,
  };
}

export function resetCategories() {
  return {
    type: actionTypes.RESET_CATEGORIES,
  };
}

export function setCart(post, info = "default") {
  return {
    type: actionTypes.SET_CART,
    payload: post,
    info,
  };
}

export function filterPostByCategory() {
  return {
    type: actionTypes.FILTER_POSTS_BY_CATEGORY,
  };
}

export function getCategoryPost(categoryId) {
  return { type: actionTypes.GET_CATEGORY_POST, payload: categoryId };
}
