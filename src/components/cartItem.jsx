import styles from './cartItem.module.css';

function CartItem({ book, onAdd }) {
  return (
    <div className={styles.cartItem}>
      <img src={book.img} alt={book.name} className={styles.bookImg} />
      <h4 className={styles.bookName}>{book.name}</h4>
      <p className={styles.bookPrice}>{book.price}</p>
      <button className={styles.addButton} onClick={onAdd}>Add</button>
    </div>
  );
}

export default CartItem;