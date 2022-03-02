import styles from './Navbar.module.scss'
import Image from 'next/image';
import React from 'react';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <a href="#">Log in</a>
            <a href="#" className={styles.google}>
                <Image className='logo' src="/google_logo.svg" alt="google logo" height={14} width={14} />
                <p>Sign up with Google</p>
            </a>
        </div>
    );
}