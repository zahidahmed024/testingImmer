import { get, post } from '../api/apicaller'
import { result, add } from 'lodash';
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
    let result = _.reverse(response.data)
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
    case DELETE: {
      const { index } = payload;
      draft.splice(index, 1);
      return draft;
    }
    case UPDATE: {
      const { index, value } = payload;
      draft[index] = value;
      return draft;
    }
    default: {
      return draft;
    }
  }
});