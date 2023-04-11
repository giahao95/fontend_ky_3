import React from 'react';
import { Card, InputNumber, Space, Button } from 'antd';
import './cart.css';
import { useState, useEffect, useRef } from 'react';

const ListItemcart = ({ cartItem }) => {
  const [productDetail, setProductDetail] = useState();
  const [isOk, setisOk] = useState(false);
  const getProductDetail = async (item) => {
    const response = await fetch(`http://localhost:5000/products/${item.product}`);
    const product = await response.json();
    setisOk(true);
    setProductDetail(product);
    return product;
  };

  useEffect(() => {
    let list = [];
    cartItem.map(async (e) => {
      let a = await getProductDetail(e);
    });
  }, []);

  return (
    <div className="Cart__Item">
      <div className=""></div>
      <div className="cart_header">
        <span className="u-h2 Left">Product</span>
        <span className="u-h4 ">Quanity</span>
        <span className="u-h4 Right">Total</span>
      </div>
      <Card>
        <div className="Cart__ItemList">
          <div className="product_item">
            <div className="product_image">
              <img src={productDetail.address} alt="Smiley face" width="120px" />
            </div>
            <div className="product_info">
              <p>{productDetail.name}</p>
              <p>Tác giả : {productDetail.author}</p>

              <p> Giá : {productDetail.price}</p>
            </div>
          </div>
          <div className="button_Quanity">
            <Space>
              <InputNumber defaultValue={1} min={1} max={100000} />
              <Button type="text">Remove</Button>
            </Space>
          </div>
          <div>
            <span> 20$ </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ListItemcart;
