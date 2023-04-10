import React, { useEffect } from 'react';
import './ProductPage.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Pagination } from 'antd';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const [producstList, setProductsList] = useState([]);
  const [current, setCurrent] = useState(1);
  const [totalProduct, settotalProduct] = useState(0);
  const { category } = useParams();

  const callProductsList = async (pageNumber) => {
    if (category === 'all') {
      const response = await fetch(`http://localhost:5000/products?pageNumber=${pageNumber}`);
      const products = await response.json();
      setProductsList(products.products);
      if (totalProduct === 0) {
        settotalProduct(products.totalProduct);
      }
    }
  };

  const onChange = (page) => {
    callProductsList(page);
    setCurrent(page);
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    callProductsList(current);
  }, []);

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
          {producstList?.map((product) => (
            <div key={product._id}>
              <div className="product-card">
                <Link to={`/productdetail/${product._id}`}>
                  <img src={product.address} className="product-image" />
                </Link>
                <h3 className="product-name">
                  <Link to={`/productdetail/${product._id}`} style={{ color: '#000', textDecoration: 'none' }}>
                    {product.name}
                  </Link>
                </h3>
                <p className="product-price">{product.price}đ</p>
                <Button style={{ backgroundColor: 'Black' }} type="primary">
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Pagination current={current} onChange={onChange} total={totalProduct} style={{ marginTop: '20px' }} />;
      </div>
    </div>
  );
};

export default ProductPage;
