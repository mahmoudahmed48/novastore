
import { Heart, ShoppingBag } from 'lucide-react';
import styles from './ProductCard.module.css'

export interface Product
{
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    rating?: {rate: number; count: number}
}

interface ProductCardProps 
{
    product: Product;
    onAddToCart?: (id: number) => void;
    onToggleWishlist?: (id: number) => void
}


function ProductCard({product, onAddToCart, onToggleWishlist} : ProductCardProps)
{

    const {id, title, price, image, category, rating} = product;

    return(
        <article className={styles.card}>

            <a href={`/product/${id}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>

                    <img src={image} alt={title} className={styles.image} loading='lazy' />

                    <button className={styles.wishlistBtn} onClick={(e) => {
                        e.preventDefault();
                        onToggleWishlist?.(id)
                    }} aria-label='Add to wishlist'> 
                        <Heart size={18} />
                    </button>

                </div>
            </a>

            <div className={styles.body}>
                
                <span className={styles.category}>{category}</span>
                <h3 className={styles.title}>
                    <a href={`/product/${id}`}>{title}</a>
                </h3>

                {
                    rating && (
                        <div className={styles.rating}>
                            <span className={styles.stars}>*</span>
                            <span>{rating.rate}</span>
                            <span className={styles.count}>({rating.count})</span>
                        </div>
                    )
                }

                <div className={styles.footer}>

                    <span className={styles.price}>${price.toFixed(2)}</span>
                    <button className={styles.addBtn} onClick={() => onAddToCart?.(id)} aria-label='Add to Cart'>
                        <ShoppingBag size={18} />
                    </button>

                </div>


            </div>

        </article>
    )

}

export default ProductCard