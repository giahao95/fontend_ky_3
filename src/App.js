import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Homepage from './pages/homepage/Homepage';
import Header from './components/header/Header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UserInfo from './pages/user-info/UserInfo';
import Cart from './pages/cart';
import Checkout from './pages/checkout/checkout';
import ProductPage from './pages/products/ProductPage';
import InforProduct from './pages/product-info/InforProduct';
import { useEffect } from 'react';
import { useCartContext } from './context/cart.context';
import Contact from './pages/contact/Contact';

function App() {
  const { setCart } = useCartContext();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cart'))?.length > 0) {
      setCart([...JSON.parse(localStorage.getItem('cart'))]);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<UserInfo />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/products/:category" element={<ProductPage />}></Route>
        <Route path="/productdetail/:id" element={<InforProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
