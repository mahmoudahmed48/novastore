import { useState } from "react";
import styles from './Navbar.module.css'
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";


function Navbar()
{
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const toggleMenu = () => setIsMenuOpen((prev) => !prev)

    return(
        <nav className={styles.navbar}>

            {/* Left Side */}
            <div className={styles.left}>

                <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>

                    {isMenuOpen ? <X size={22}/> : <Menu size={22} />}
                    
                </button>

                <a href="/" className={styles.logo}>NovaStore</a>

            </div> 
            {/* Left Side */}

            {/* Nav Links */}
            <ul className={styles.links}>

                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>

            </ul>
            {/* Nav Links */}

            {/* Nav Actions */}
            <div className={styles.actions}>

                <button className={styles.iconBtn} aria-label="Search">
                    <Search size={20} />
                </button>

                <a href="/whishlist" className={styles.iconBtn} aria-label="Wishlist">
                    <Heart  size={20}/>
                </a>

                <a href="/cart" className={styles.iconBtn} aria-label="Cart">
                    <ShoppingBag size={20} />
                    <span className={styles.badge}>0</span>
                </a>

                <a href="/account" className={styles.iconBtn} aria-label="Account">
                    <User  size={20}/>
                </a>

            </div>

            {/* Nav Actions */}

            {
                isMenuOpen && (
                    <ul className={styles.mobilemenu}>

                        <li><a href="/home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="/shop" onClick={toggleMenu}>Shop</a></li>
                        <li><a href="/about" onClick={toggleMenu}>About</a></li>
                        <li><a href="/account" onClick={toggleMenu}>Account</a></li>

                    </ul>
                )
            }

        </nav>
    )

}

export default Navbar