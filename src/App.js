import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Homepage from './pages/homepage/Homepage';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/dangnhap" element={<Login />} />
        <Route path="/dangky" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
