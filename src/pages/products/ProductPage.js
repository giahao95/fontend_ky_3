import React from 'react';
import './ProductPage.css';
import { SearchOutlined } from '@ant-design/icons';
import { datasach } from '../../constrant/datasach';
import { Button } from 'antd';
import { useState } from 'react';

const ProductPage = () => {
  return (
    <div>
      <div className="title">
        <h1>Product</h1>
      </div>
      <div className="search">
        <form>
          <div className="glass">
            <SearchOutlined style={{ fontSize: '30px' }} />
          </div>
          <input placeholder="Search" type="text" />
        </form>
      </div>
      <div className="main">
        <div className="product-container">
          {datasach.map((product) => (
            <div key={product.id}>
              <div className="product-card">
                <img src={product.image} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}0đ</p>
                <Button style={{ backgroundColor: 'Black' }} type="primary">
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
