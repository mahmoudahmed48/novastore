import Container from "../../ui/Container";
import styles from './Header.module.css'

function Header()
{
    return(
        <header className={styles.header}>
            <Container>
                Navbar Store
            </Container>
        </header>
    )
}

export default Header