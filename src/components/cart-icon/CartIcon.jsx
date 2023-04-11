import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './cart-icon.css';
import { useCartContext } from '../../context/cart.context';

const CartIcon = () => {
  const [cartNumber, setCartNumber] = useState(0);
  const { cart } = useCartContext();
  const cartSum = JSON.parse(localStorage.getItem('cart'))?.reduce((sum, item) => {
    return (sum += item.cartNum);
  }, 0);

  useEffect(() => {
    if (cartSum >= 0) {
      setCartNumber(cartSum);
    }
  }, [cartSum]);

  return (
    <div className="cart-icon">
      <ShoppingCartOutlined />
      {cartNumber > 0 ? <span className="cart-number">{cartNumber}</span> : null}
    </div>
  );
};

export default CartIcon;
