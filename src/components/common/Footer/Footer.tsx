import Container from "../../ui/Container";
import styles from './Footer.module.css'

function Footer()
{

    const year = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <Container>
                <div className={styles.grid}>

                    <div className={styles.brand}>

                        <h3 className={styles.logo}>NovaStore</h3>
                        <p className='text-muted'>Modern E-commerce</p>

                    </div>

                    <div className={styles.column}>

                        <h4>Shop</h4>
                        <ul>

                            <li><a href="/shop">All Products</a></li>
                            <li><a href="/shop?category=electronics">Electronics</a></li>
                            <li><a href="/shop?category=jewelery">Jewelery</a></li>

                        </ul>

                    </div>

                    <div className={styles.column}>

                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>

                    </div>

                    <div className={styles.column}>

                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">My Orders</a></li>
                            <li><a href="#">Account</a></li>
                        </ul>

                    </div>

                </div>

                <div className={styles.bottom}>

                    <p className="text-muted"> &copy; {year} NovaStore. All rights reserved </p>

                </div>


            </Container>
        </footer>
    )

}

export default Footer