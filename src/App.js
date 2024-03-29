
import './Mall.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Routes,
} from "react-router-dom";

import { Navbar } from './component/Navbar';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


function App() {
  const[authenticate, setAuthenticate] = useState(false); // true 면 로그인 됨, false 이면 로드인 안됨
  useEffect(()=>{
    console.log("authenticate", authenticate)
  }, [authenticate]) // authenticate 값이 바뀔 때 마다
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} /> {/* 3번 */}
      </Routes>
    </>
  );
}

export default App;


/*
  [ 홈페이지 만들기 - Flow   ]
  1/1. 전체상품페이지, 로그인, 상품상세페이지

  1/2. 전체 상품페이지에세 전체 상품을 볼 수 있다

  1/3. 로그인 버튼을 누르면 로그인 페이지가 나온다

  3. 상품디테일을 눌렸으나, 로그인이 안되었을경우에는 로그인페이지가 먼저 나온다

  4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다

  5. 로그아웃 버튼을 클릭하면 로그아웃이 된다

  5. 로그아우웃이되면 상품 디테일페이지를 볼수없다, 다시 로그인 페이지가 보인다

  116. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다

  1/7. 상품을 검색할 수 있다.
  funetinn Annd），

*/