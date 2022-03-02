import styles from './Layout.module.scss'
import Image from 'next/image';

export const Layout = () => {
    return (
        <div className={styles.container}>
            <h1>Don&apos;t lose your precious <span>easings</span> ever again</h1>
            <div className={styles.image}>
                <Image src='/illustration.svg' alt='Bench and trees' width={478} height={260} />
            </div>
            <h2>Add your first easing</h2>
        </div>
    );
  }