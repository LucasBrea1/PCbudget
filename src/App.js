import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carrito from './pages/Carrito';
import Home from './pages/Home';
import Header from './components/header';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from './redux/CartSlice';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div> {/* */}

        <Router>
          <div>
            <Header/>
              <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/carrito" element={<Carrito/>} />
              </Routes>
          </div>
        </Router>

      </div> 
    </PersistGate>
  </Provider>

  );
}

export default App;
