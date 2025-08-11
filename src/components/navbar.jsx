import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar () {
    return (
        <div className={styles.navbar}>
            <Link to="/"><button className={styles.navButton}>Home</button></Link>
            <Link to="/catalogue"><button className={styles.navButton}>Catalogue</button></Link>
            <Link to="/cart"><button className={styles.navButton}>Cart</button></Link>
        </div>
    );
}

export default Navbar;