import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './Button.module.css'

type variant = 'primary' | 'secondary' | 'ghost';
type size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: variant;
    size?: size;
    fullWidth?: boolean;
    loading?: boolean
    children: ReactNode;
}



function Button({variant = 'primary', size = 'md', fullWidth = false, loading = false, children, className, disabled, ...rest} : ButtonProps) {
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth  ? styles.fullWidth : '',
        className ?? '',
    ]
    .filter(Boolean)
    .join(' ');

    return(
        <Button className={classes} disabled={disabled || loading} {...rest} >
            {loading ? 'Loading... ' : children}
        </Button>
    )
}

export default Button