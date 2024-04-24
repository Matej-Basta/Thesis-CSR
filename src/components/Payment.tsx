import Form from "./Form";
import Price from "./Price";
import styles from "./payment.module.css";

export default function Payment() {
    return (
        <div className={styles["payment-container"]}>
            <Form />
            <Price />
        </div>
    )
}