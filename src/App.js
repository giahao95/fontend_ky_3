import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import './App.css'; 
import '@coreui/coreui/dist/css/coreui.min.css';


function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
