import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";

// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";
// import { createStore, applyMiddleware } from "redux";
// let store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productSlice,
  },
});

// let store = createStore(productReducer, applyMiddleware(thunk));
// 디럭스가 업그레이드 되면, createStore 지원 안 할래~
// 그래서, 대신에 configureStore()
export default store;
