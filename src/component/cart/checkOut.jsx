import React from 'react';
import { Form, Input, Button } from 'antd';
import './checkout.css';
import { useCartContext } from '../../context/cart.context';

const CheckOut = () => {
  const { cart } = useCartContext();
  const priceSum = cart?.reduce((sum, book) => {
    return (sum += book.price * book.cartNum);
  }, 0);

  const { TextArea } = Input;
  return (
    <div className="Checkout_total">
      <div className="Checkout_total_note">
        <p>Add Order Note</p>
        <Form.Item>
          <TextArea rows={4} />
        </Form.Item>
      </div>
      <div className="Checkout_Button">
        <p> Total : {priceSum} đ</p>
        <p> Shipping & taxes calculated at checkout</p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default CheckOut;
