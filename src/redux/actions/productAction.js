// getProducts 함수를 미들웨어로 옮겨주기~
// import { productActions } from "../reducers/productReducer";

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
    // dispatch(productActions.getAllProducts({ data }));
  };
}

export const productAction = { getProducts };
