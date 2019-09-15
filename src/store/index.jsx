import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import empleoReducer from "./reducers/empleoReducer";

export const rootReducer = combineReducers({
  empleoReducer: empleoReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
