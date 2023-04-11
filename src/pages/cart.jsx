import React from 'react';
import ListItemcart from '../component/listItemcart';
import CheckOut from '../component/cart/checkOut';
import { Row, Col } from 'antd';
import '../component/cart.css';

const Cart = () => {
  const cartItem = JSON.parse(window.localStorage.getItem('cart'));
  return (
    <div className="cart_container">
      <div className="cart_container_lv1">
        <Row>
          <Col span={24}>
            <h2 className="Cart_header">Cart</h2>
            <ListItemcart cartItem={cartItem} />
            <CheckOut />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
