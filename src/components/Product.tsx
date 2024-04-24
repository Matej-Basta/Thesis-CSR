import ProductType from '../types/ProductInterface';
import styles from './product.module.css';
import { useGenerationStoreCart } from '../state/cart';

export default function Product({ product }: { product: ProductType }) {
    const {cart, setCart} = useGenerationStoreCart();
    
    const addToCart = () => {
        const item = cart.find((cartItem) => cartItem.id === product.id);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }
        setCart([...cart]);
    }

    return (
        <div className={styles["product-container"]}>
            <img src={product.image} alt={product.name} className={styles["product-image"]} />
            <div className={styles["product-text"]}>
                <div className={styles["product-header"]}>
                    <h2 className={styles["product-heading"]}>{product.name}</h2>
                    <p className={styles["product-price"]}>{product.price} DKK</p>
                </div>
                <p>{product.description}</p>
                <button onClick={addToCart} className={styles["product-button"]}>Add to Cart</button>
            </div>
        </div>
    )
}