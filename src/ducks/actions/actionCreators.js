import faker from "faker";
import * as actionTypes from "./actionTypes";

const api = "http://localhost:4000/api/";

const getProductsUrl = api + "post";
const getProductByIDUrl = api + "posts";
const getCategoriesUrl = api + "category";
const getUsersUrl = api + "users";
const getCountriesUrl = api + "countries";

export function getProducts() {
  return function (dispatch) {
    fetch(getProductsUrl)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((e) => {
          e.image = faker.image.image(350, 350, true);
          while (e.images.length <= 4) {
            e.images.push(faker.image.image(350, 350, true));
          }
        });
        dispatch({
          type: actionTypes.GET_PRODUCTS,
          payload: res,
        });
      })
      .catch((e) => console.error(e));
  };
}

export function getProductsById(id) {
  return function (dispatch) {
    fetch(`${getProductByIDUrl}/${id}`)
      .then((res) => res.json())
      .then((res) => {
        res.image = faker.image.image(350, 350, true);
        while (res.images.length <= 4) {
          res.images.push(faker.image.image(350, 350, true));
        }
        dispatch({
          type: actionTypes.GET_PRODUCTS_BY_ID,
          payload: res,
        });
      })
      .catch((e) => console.error(e));
  };
}

export function getProductsByName(name) {
  return function (dispatch) {
    return fetch(getProductsUrl + "?name=" + name)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: actionTypes.GET_PRODUCTS, payload: json });
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

export function filterProductsByCategory() {
  return {
    type: actionTypes.FILTER_PRODUCTS_BY_CATEGORY,
  };
}

export function getCategoryProducts(categoryId) {
  return { type: actionTypes.GET_CATEGORY_PRODUCTS, payload: categoryId };
}

export function create_post(payload) {
  return async () => {
    return await fetch(getProductsUrl, {
      method: "POST",
      body: payload,
    }).catch((e) => console.error(e));
  };
}
