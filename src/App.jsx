import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id);

      if (existingItem) {
        return prevCart.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      return prevCart.filter(item => item.id !== itemId);
    });
  };

  const increaseQuantity = (itemId) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseQuantity = (itemId) => {
    setCart(prevCart => {
      const updatedCart = prevCart
        .map(item => {
          if (item.id !== itemId) return item; // Keep unchanged items

          // For the matching item
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }; // Decrease quantity
          }

          return null; // Quantity is 1, mark for removal
        })
        .filter(Boolean); // Remove nulls

      return updatedCart;
    });
  };

  return (
    <>
      <Navbar />
      <Outlet context={{ cart, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, }} />
    </>
  );
}

export default App;

