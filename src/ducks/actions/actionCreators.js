import faker from 'faker';
import * as actionTypes from './actionTypes';

export const api = 'https://api-ec.herokuapp.com/api/';

const getPostsUrl = api + 'post';
export const getPostByIdUrl = api + 'posts';
export const getCategoriesUrl = api + 'category';
const getUsersUrl = api + 'users';
const getCountriesUrl = api + 'countries';
const Review = api + 'admin/review';

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

export function getPostByName(name) {
  return function (dispatch) {
    fetch(getPostsUrl + '?name=' + name)
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
    fetch('http://localhost:4000/api/posts' + '/' + id)
      .then((res) => res.json())
      .then((res) => {
        while (res.Images.length < 5) {
          res.Images = [
            ...res.Images,
            { link: faker.image.image(350, 350, true) },
          ];
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

export function create_post(payload, token) {
  return async () => {
    return await fetch('http://localhost:4000/api/admin/post', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'token': token,
      },
    }).catch((e) => console.error(e));
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

export function setCart(post) {
  return {
    type: actionTypes.SET_CART,
    payload: post,
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

export function getOrders() {
  return function (dispatch) {
    return fetch(`http://localhost:4000/api/admin/orders`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: actionTypes.GET_ORDERS, payload: json });
      })
      .catch((e) => console.error(e));
  };
}

export function filterOrder(payload) {
  return {
    type: actionTypes.SORT_ORDERS,
    payload,
  };
}

export function postReview(payload) {
  return async () => {
    return await fetch(Review, {
      method: 'POST',
      body: payload,
    }).catch((e) => console.error(e));
  };
}

export function getReview(PostId) {
  return function (dispatch) {
    return fetch(Review, PostId)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: actionTypes.GET_REVIEW, payload: json });
      })
      .catch((e) => console.error(e));
  };
}
