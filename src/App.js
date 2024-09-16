import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Carrito from './pages/carrito';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/carrito">carrito</Link>
        </nav>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
