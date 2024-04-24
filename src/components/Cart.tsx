import styles from "./cart.module.css";
import { useGenerationStoreCart, CartItemType } from "../state/cart";
import CartItem from "./CartItem";

export default function Cart() {
    const {cart, setCart} = useGenerationStoreCart();
    
    const priceOfItems = cart.reduce((acc, item) => acc + (item.quantity*item.price), 0);
    const roundedPrice = Number(priceOfItems.toFixed(2));

    const clearCart = () => {
        setCart([]);
    }

    if (cart.length === 0) {
        return (
            <div className={styles.cart}>
                There are no items in the cart.
            </div>
        )
    }

    return (
    <div className={styles.cart}>
        {cart.map((item: CartItemType) => (
            <CartItem key={item.id} item={item}/>
        ))}
        <hr className={styles.line}/>
        <div className={styles.summary}>
            <button onClick={clearCart} className={styles.button}>Clear cart</button>
            <p className={styles.total}>{roundedPrice} DKK</p>
        </div>
    </div>
    )
}