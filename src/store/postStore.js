import { get, post, put, del } from '../api/apicaller'
import { findIndex } from 'lodash';
import { produce } from 'immer'
import _ from 'lodash'
const ADD = 'ADD';
const DELETE = 'DELETE';
const UPDATE = 'UPDATE';
const FETCH = 'fetch';

// export const requestLocations = () => ({ type: GET_LOCATIONS });
// export const receiveLocations = locations => ({ type: GET_LOCATIONS_SUCCESS, locations });
// export const receiveLocationsFail = error => ({ type: GET_LOCATIONS_FAILURE, error });

export const fetchPosts = () => async (dispatch) => {
  try {
    let response = await get('posts')
    let result = response.data.splice(0, 5)
    console.log(result)
    dispatch({
      type: FETCH,
      payload: result
    })
  } catch (error) {
    alert(error)
  }
};
export const addPost = (data) => async (dispatch) => {
  try {
    let response = await post('posts', data)
    console.log('response', response)
    dispatch({
      type: ADD,
      payload: response.data
    })
  } catch (error) {
    alert(error)
  }
};

export const update = (data) => async (dispatch) => {
  // console.log(`posts/${data.id}${JSON.stringify(data)}`)
  try {
    let response = await put(`posts/${data.id}`, data)
    console.log('response', response)
    dispatch({
      type: UPDATE,
      payload: response.data
    })
  } catch (error) {
    alert(error)

  }
};
export const deletePost = (data) => async (dispatch) => {
  // console.log(data)
  try {
    let response = await del(`posts/${data.id}`)
    console.log('response', response)
    dispatch({
      type: DELETE,
      payload: data.id
    })
  } catch (error) {
    alert(error)

  }
};

// export const addPosts = post => ({ type: ADD, post });

const initialState = {
  posts: [],
  isFetching: false,
};



export default immerReducer = produce((draft = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH: {
      draft.posts = payload;
      return draft;
    }
    case ADD: {
      draft.posts.push(payload);
      return draft;
    }
    case UPDATE: {
      console.log(draft)
      let itemIndex = draft.posts.findIndex(item => item.id == payload.id)
      draft.posts[itemIndex].title = payload.title;
      return draft;
    }
    case DELETE: {
      let itemIndex = draft.posts.findIndex(item => item.id == payload)
      draft.posts.splice(itemIndex, 1);
      return draft;
    }
    default: {
      return draft;
    }
  }
});