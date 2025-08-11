import { useOutletContext } from 'react-router-dom';
import styles from './cart.module.css';

function Cart () {
  const { cart, decreaseQuantity, increaseQuantity, removeFromCart} = useOutletContext();

  if (!cart.length) {
    return <p className={styles.cartTitle}>Your cart is empty.</p>;
  }

  return (
    <div className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>Cart</h3>
      <p>You have {cart.reduce((sum, item) => sum + item.quantity, 0)} items in your cart.</p>
      <ul className={styles.cartList}>
        {cart.map((item, index) => (
          <li key={index} className={styles.cartItem}>
            <span>
              {item.name} - ${item.price} × {item.quantity}
            </span>
            <span className={styles.cartButtons}>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </span>
          </li>
        ))}
      </ul>
      <p className={styles.cartTotal}>
        Total: ${cart.reduce((total, item) => total + Number(item.price.replace('$', '')) * item.quantity, 0).toFixed(2)}
      </p>
      <button className={styles.checkoutBtn} onClick={() => alert('Thanks for your purchase!')}>Checkout</button>
    </div>
  );
}

export default Cart;
