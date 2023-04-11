import React, { useEffect, useState } from 'react';
import './InforProduct.css';
import { Button } from 'antd';
import { useParams } from 'react-router';
import { async } from 'q';

const InforProduct = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();

  const getProductDetail = async () => {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    const product = await response.json();
    setProductDetail(product);
  };

  const handleAddCart = () => {
    const cartItem = window.localStorage.getItem('cart');
    if (!cartItem) {
      window.localStorage.setItem(
        'cart',
        JSON.stringify([
          {
            product: productDetail._id,
            quanity: 1,
          },
        ]),
      );
    } else {
      let cartItemadd = JSON.parse(cartItem);
      if (
        cartItemadd.filter((e) => {
          return e.product == productDetail._id;
        }).length === 0
      ) {
        cartItemadd.push({
          product: productDetail._id,
          quanity: 1,
        });
        window.localStorage.setItem('cart', JSON.stringify(cartItemadd));
      }
    }
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="book">
      <div className="book-detail">
        <div className="book-image-container">
          <img src={productDetail?.address} alt={productDetail?.name} />
        </div>
        <div className="book-details-header">
          <p className="book-title">{productDetail?.name}</p>
          <p>Tên tác giả: {productDetail?.author}</p>
          <p>Dịch giả: {productDetail?.tran}</p>
          <p>Ngày phát hành: {productDetail?.pulish}</p>
          <p>Số trang: 281</p>
          <Button
            style={{
              width: '100%',
              height: '40px',
              border: '1px solid black',
              backgroundColor: 'Black',
              fontSize: '1rem',
            }}
            type="primary"
            onClick={handleAddCart}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>

      <div className="book-details-container">
        <div className="book-description">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Giới Thiệu Sách</h2>
          {productDetail?.description.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default InforProduct;
