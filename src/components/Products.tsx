import { useEffect, useState } from 'react';
import  ProductType  from '../types/ProductInterface';
import Product from './Product';
import styles from './products.module.css';

const BASE_URL = 'https://server-for-products.vercel.app/api/products';

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(BASE_URL);
        
        const data = await response.json();
        const products = data.products as ProductType[];
        setProducts(products);
    }
    fetchData();
  }, []);
  
  return (
    <div className={styles.products}>
      {products.map((product: ProductType) => (
        <Product key={product.id} product={product}/>
      ))} 
    </div>
  );
}