// getProducts 함수를 미들웨어로 옮겨주기~
import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
  // 미들웨어는 함수를 리턴 함~
  // getState 현재의 state 정보를 받을 수 있다.
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/kristyJinny/react-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);  이 값을 리듀셔로 전달하기
    // 위에서 전달 받은 dispatch 값을 여기에서 사용
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/kristyJinny/react-mall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
  };
}
export const productAction = { getProducts, getProductDetail };
