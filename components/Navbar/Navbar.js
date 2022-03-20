import styles from './NavBar.module.scss'
import Image from 'next/image';

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <a href="#" className={styles.google}>
                <Image src="/google_logo.svg" alt="google logo" height={14} width={14} />
                <p>Sign up with Google</p>
            </a>
        </div>
    );
}