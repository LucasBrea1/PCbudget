import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/CartSlice';
import jsPDF from 'jspdf';


function Carrito() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Shopping Cart', 10, 10);

    let y = 20;
    cartItems.forEach(item => {
      doc.text(`${item.name} - $${item.price} x ${item.quantity}`, 10, y);
      y += 10;
    });

    doc.text(`Total: $${totalAmount}`, 10, y + 10);

    doc.save('cart.pdf');
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
    <h2>Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} (x{item.quantity})
            <button onClick={() => handleAddToCart(item)}>Add one more</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
    <div>
      <p>Total: ${totalAmount}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
      <button onClick={handleExportPDF}>Export as PDF</button>
    </div>
  </div>
  );
}

export default Carrito
