import React, { useEffect } from 'react';
import './ProductPage.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Pagination } from 'antd';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';
import { useCartContext } from '../../context/cart.context';

const ProductPage = () => {
  const [producstList, setProductsList] = useState([]);
  const [current, setCurrent] = useState(1);
  const [totalProduct, settotalProduct] = useState(0);
  const { user } = useUserContext();
  const { cart, addCart } = useCartContext();
  const { category } = useParams();
  const navigate = useNavigate();

  const callProductsList = async (pageNumber) => {
    const response = await fetch(`http://localhost:5000/products?pageNumber=${pageNumber}`);
    const products = await response.json();
    setProductsList(products.products);
    if (totalProduct === 0) {
      settotalProduct(products.totalProduct);
    }
  };

  const getCategoryBook = async (pageNumber) => {
    const response = await fetch(
      `http://localhost:5000/products/category?pageNumber=${pageNumber}&keyword=${category}`,
    );
    const books = await response.json();
    setProductsList(books.products);
    settotalProduct(books.totalProduct);
  };

  const onChange = (page) => {
    callProductsList(page);
    setCurrent(page);
    document.documentElement.scrollTop = 0;
  };

  const searchBook = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/products?keyword=${e.target.value.toLowerCase()}`);
    const book = await response.json();
    setProductsList(book.products);
    settotalProduct(book.totalProduct);
  };

  const handleAddCart = (id) => {
    if (user) {
      addCart(id);
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (category === 'all') {
      callProductsList(current);
    } else {
      getCategoryBook(current);
    }
  }, [category]);

  return (
    <div className="product-page">
      <div className="title">
        <h1>Product</h1>
      </div>
      <div className="search">
        <form onSubmit={searchBook}>
          <div className="glass">
            <SearchOutlined style={{ fontSize: '30px' }} />
          </div>
          <input placeholder="Tìm tên sách" type="text" name="search" onChange={searchBook} />
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
                  <Link
                    to={`/productdetail/${product._id}`}
                    style={{ color: '#000', textDecoration: 'none', textTransform: 'capitalize' }}
                  >
                    {product.name}
                  </Link>
                </h3>
                <p className="product-price">{product.price}đ</p>
                <Button className='btn-cart'  onClick={() => handleAddCart(product._id)}>
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          ))}
        </div>
        {totalProduct >= 10 && (
          <Pagination current={current} onChange={onChange} total={totalProduct} style={{ marginTop: '20px' }} />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
