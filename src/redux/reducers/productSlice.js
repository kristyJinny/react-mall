import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/kristyJinny/react-mall/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      // 강제로 값을 보내고 싶을 때
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getItem = createAsyncThunk(
  "product/fetchOne",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/kristyJinny/react-mall/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      // 강제로 값을 보내고 싶을 때
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  // 다중의 리듀셔s
  reducers: {
    getSigleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
  // 리덕스는: 중앙 집중화 기능, 비동기 노노 지원
  // 액션 취하면 바로 업데이트
  // extraReducers: 외부 라이브러리에 의해 호출이 필요한~, 함수
  // 리듀셔는 동기적으로 state
  // extradReducer: 비동기, 외부 라이브러리
  extraReducers: (builder) => {
    // 데이터 오는 중
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true; // 로딩스피너 시작
      })
      // 데이터 성공
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      // 데이터 실패
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(getItem.pending, (state) => {
        state.isLoading = true; // 로딩스피너 시작
      })
      // 데이터 성공
      .addCase(getItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedItem = action.payload;
      })
      // 데이터 실패
      .addCase(getItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
/*
const productSlice = createSlice({
  name: "product",
  initialState,
  // 다중의 리듀셔s
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getSigleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});
*/
// console.log("pppp", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;

/*
function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    case "GET_PRODUCT_DETAIL_SUCCESS":
      return { ...state, selectedItem: payload.data };
    default:
      return { ...state };
  }
}


export default productReducer;
*/
