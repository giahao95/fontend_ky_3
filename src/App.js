import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Homepage from './pages/homepage/Homepage';
import HeaderLayout from './components/header/Header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UserInfo from './pages/user-info/UserInfo';
import Cart from './pages/cart';
import Checkout from './pages/checkout';

function App() {
  return (
    <div className="App">
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<UserInfo />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
