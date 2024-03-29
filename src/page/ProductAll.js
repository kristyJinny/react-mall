import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") | "";

    let url = `https://my-json-server.typicode.com/kristyJinny/react-mall/products?q=${searchQuery}`;

    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProducts(data);
    console.log("쿼리 값은?", searchQuery);
  }

  // 처음 한 번만 실행 된다., 다시 호출 할려면: 쿼리값이 바뀔때마다, 다시 불러줘야 한다.
  useEffect(()=> {
    getProducts()
  },[query]);

  return (
    <Container className="product-list-container">
      <Row>
        {products.map((item) => {
          return(
            <Col md={3} sm={12}>
              <ProductCard item={item} />
            </Col>)
        })}
      </Row>
    </Container>
  );
}

export default ProductAll;
