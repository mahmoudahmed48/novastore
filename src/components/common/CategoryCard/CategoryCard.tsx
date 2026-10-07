import styles from './CategoryCard.module.css'

interface CategoryCardProps
{
    name: string;
    image: string;
    count?: number
}

function CategoryCard({name, image, count} : CategoryCardProps)
{
    return (
        <a href={`/shop/category=${name.toLowerCase()}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={name} className={styles.image} loading='lazy' />
            </div>

            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                {
                    count !== undefined && <span className={styles.count}>{count} Items</span>
                }
            </div>

        </a>
    )
}

export default CategoryCard