import styles from "./price.module.css";
import { useGenerationStoreCart } from "../state/cart";

export default function Price() {
    const {cart} = useGenerationStoreCart();
    const priceOfItems = cart.reduce((acc, item) => acc + (item.quantity*item.price), 0);
    const roundedPrice = Number(priceOfItems.toFixed(2));
    const deliveryPrice = Number(roundedPrice * 0.1).toFixed(0);
    const tax = Number(roundedPrice * 0.2).toFixed(0);
    const total = Number(roundedPrice + deliveryPrice + tax).toFixed(2);
    return (
        <div className={styles.price}>
            <div className={styles.unit}>
                <p>Amount</p>
                <p>{roundedPrice} DKK</p>
            </div>
            <div className={styles.unit}>
                <p>Delivery</p>
                <p>{deliveryPrice} DKK</p>
            </div>
            <div className={styles.unit}>
                <p>Tax</p>
                <p>{tax} DKK</p>
            </div>
            <hr />
            <div className={`${styles.unit} ${styles.total}`}>
                <p>Total</p>
                <p>{total} DKK</p>
            </div>
            <div className={`${styles.unit} ${styles.terms}`}>
                <input type="checkbox" name="terms" />
                <p className={styles["terms-text"]}>I have read and agreed to the terms.</p>
            </div>
            <button className={styles["price-button"]}>Submit order</button>
        </div>
    );
}