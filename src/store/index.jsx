import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import appReducer from "./reducers/appReducer";
import userReducer from "./reducers/userReducer";
import empleoReducer from "./reducers/empleoReducer";

export const rootReducer = combineReducers({
  appReducer: appReducer,
  userReducer: userReducer,
  empleoReducer: empleoReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
