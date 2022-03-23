import styles from './NavBar.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { fadeInVariants } from '../../animations/animations'

export const NavBar = () => {
    return (
        <motion.div className={styles.container} animate="visible" initial="hidden" variants={fadeInVariants}>
            <a href="#" className={styles.google}>
                <Image src="/google_logo.svg" alt="google logo" height={14} width={14} />
                <p>Sign up with Google</p>
            </a>
        </motion.div>
    );
}