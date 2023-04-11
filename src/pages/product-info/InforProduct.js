import React, { useEffect, useState } from 'react';
import './InforProduct.css';
import { Button } from 'antd';
import { useParams } from 'react-router';
import { useUserContext } from '../../context/user.context';
import { useCartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

const InforProduct = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();
  const { user } = useUserContext();
  const { addCart } = useCartContext();
  const navigate = useNavigate();

  const getProductDetail = async () => {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    const product = await response.json();
    console.log(product);
    setProductDetail(product);
  };

  const handleAddCart = (id) => {
    if (user) {
      addCart(id);
    } else {
      navigate('/login');
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
            onClick={() => handleAddCart(id)}
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
