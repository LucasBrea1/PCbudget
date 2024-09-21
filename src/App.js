import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carrito from './pages/Carrito';
import Home from './pages/Home';
import Header from './components/header';

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
