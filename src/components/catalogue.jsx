import { useOutletContext } from 'react-router-dom';
import books from './data/books';
import CartItem from './cartItem';
import styles from './catalogue.module.css';

function Catalogue () {
  const { addToCart } = useOutletContext();

  return (
    <div className={styles.catalogueContainer}>
      <h1 className={styles.catalogueTitle}>Catalogue</h1>
      <p className={styles.catalogueDesc}>Explore our wide range of products available for purchase.</p>
      <div className={styles.bookList}>
        {books.map((book) => (
            <CartItem key={book.id} book={book} onAdd={() => addToCart(book)} />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
