import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate = useNavigate()

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} alt="" />
      <div className="info">
        <div className="choice">{item?.choice === true ? 'choice' : ''}</div>
        <div className="title">{item?.title}</div>
        <div className="price">₩{item?.price}</div>
        <div className="new-product">{item?.new === true ? '신제품' : ""}</div>
      </div>
    </div>
  );
};

export default ProductCard;