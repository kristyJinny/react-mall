import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  // let [products, setProducts] = useState([]);  이번수업에는 useSelector 사용
  const [query, setQuery] = useSearchParams();

  const dispatch = useDispatch();

  const getProducts = () => {
    // searchQuery 정보는 ProductAll 에 있음, searchQuery 어떻게 미들웨오로 전달 할까?
    let searchQuery = query.get("q") || "";

    // 이제는 여기서, 미들웨어 함수를 불러줘야 함 // searchQuery 정보는 매개변수로 전달~
    dispatch(productAction.getProducts(searchQuery));

    // 미들웨어 함수 사용 안 헀을 떄,
    // let url = `https://my-json-server.typicode.com/kristyJinny/react-mall/products?q=${searchQuery}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // setProducts(data);
    // console.log("쿼리 값은?", searchQuery);
    // console.log(data);
  };

  // 처음 한 번만 실행 된다., 다시 호출 할려면: 쿼리값이 바뀔때마다, 다시 불러줘야 한다.
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container className="product-list-container">
      <Row>
        {productList.map((item) => {
          return (
            <Col md={3} sm={12}>
              <ProductCard item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductAll;
