import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UserInfo from './pages/user-info/UserInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accountInfo" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
