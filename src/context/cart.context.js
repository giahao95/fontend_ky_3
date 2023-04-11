import React, { useContext, useEffect, useState } from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = async (id) => {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    let book = await response.json();

    const booksCartList = JSON.parse(localStorage.getItem('cart'));

    if (booksCartList) {
      const cartIndex = booksCartList.findIndex((item) => item._id === book._id);
      let booksCart = [...booksCartList];
      if (cartIndex === -1) {
        book = { ...book, cartNum: 1 };
        booksCart.push(book);
      } else {
        booksCart[cartIndex].cartNum += 1;
      }
      localStorage.setItem('cart', JSON.stringify(booksCart));
    } else {
      book = { ...book, cartNum: 1 };
      localStorage.setItem('cart', JSON.stringify([book]));
    }
    setCart([...cart, book]);
  };

  return <CartContext.Provider value={{ cart, addCart, setCart }}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
