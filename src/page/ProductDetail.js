import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  // const dispatch = useDispatch();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/kristyJinny/react-mall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail-container">
      <Row>
        <Col xs={12} md={6} className="product-detail-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col xs={12} md={6} className="product-detail-info">
          <div className="product-title">{product?.title}</div>
          <div className="product-price">₩ {product?.price}</div>
          <div className="choice">
            {product?.choice ? "Conscious choice" : ""}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

// https://my-json-server.typicode.com/kristyJinny/jinny-mall
