import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers";

let store = createStore(rootReducer, applyMiddleware(thunk));
// let store = createStore(productReducer, applyMiddleware(thunk));

export default store;
