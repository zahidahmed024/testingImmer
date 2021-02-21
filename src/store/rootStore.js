import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import User from "./userStore";
import Post from './postStore';

// import rootReducer from './reducers/';

let reducers = combineReducers({
    users: User,
    posts: Post
})

//composeWithDevTools will be removed in production.
export const store = createStore(reducers,
    composeWithDevTools(
        applyMiddleware(reduxThunk)
    )
);
