import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import WebNavbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <WebNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/cart' element={<Cart/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
