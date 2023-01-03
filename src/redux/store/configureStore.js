import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from "../reducers/userReducer"

const composedEnhancer = compose( applyMiddleware(thunk),composeWithDevTools())

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user : userReducer,
    }),
    // applyMiddleware(thunk),
    composedEnhancer,
    
  )

  return store;
}

export default configureStore;