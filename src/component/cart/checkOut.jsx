import React from 'react';
import { Form, Input, Button } from 'antd';

const CheckOut = () => {
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
        <p> Total : </p>
        <p> Shipping & taxes calculated at checkout</p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default CheckOut;
