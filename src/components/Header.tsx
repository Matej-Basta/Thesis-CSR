import styles from "./header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useGenerationStoreCart, CartItemType } from "../state/cart";
import { useGenerationStoreCartVisibility } from "../state/cartVisibility";
import Cart from "./Cart";

export default function Header() {
  const {cart} = useGenerationStoreCart();
  const {isCartVisible, setIsCartVisible} = useGenerationStoreCartVisibility();

  const itemQuantity = cart.reduce((acc: number, item: CartItemType) => acc + item.quantity, 0);
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <div className={styles.cart}>
        <FaShoppingCart onClick={() => setIsCartVisible(!isCartVisible)} className={styles["cart-icon"]}/>
        <div>{itemQuantity}</div>
      </div>
      {isCartVisible ? <Cart /> : null}
    </header>
  );
}