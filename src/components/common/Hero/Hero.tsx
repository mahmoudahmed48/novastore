
import Button from '../../ui/Button';
import Container from '../../ui/Container'
import styles from './Hero.module.css'

function Hero()
{
    const year = new Date().getFullYear();

    return(
        <section className={styles.hero}>

            <Container>
                <div className={styles.content}>

                    <p className={styles.eyebrow}>New Collection {year}</p>
                    <h1 className={styles.title}>
                        Discover products that fit your life.
                    </h1>
                    <p className={styles.subtitle}>
                        Handpicked quality, honest prices, fast deleviry -- everything you need in one place
                    </p>

                    <div className={styles.actions}>
                        <Button size='lg'>Shop Now</Button>
                        <Button variant='secondary' size='lg'>
                            Browse Categories
                        </Button>
                    </div>

                </div>
            </Container>

        </section>
    )

}

export default Hero