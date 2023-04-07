import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/dangnhap" element={<Login />} />
        <Route path="/dangky" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
