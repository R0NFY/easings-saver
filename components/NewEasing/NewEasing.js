import Image from 'next/image';
import styles from './NewEasing.module.scss'

const NewEasing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.titleWrapper}>
                    <input id="easingTitle" type="text" placeholder="First easing" />
                    <label className={styles.editIcon} htmlFor="easingTitle">
                        <Image src="/edit-icon.svg" width={16} height={16} alt="edit icon" />
                    </label>
                </div>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.coordinatesContainer}>
                        <input className={styles.coordinatesInput} placeholder="x1, y1, x2, y2" type="text" />
                        <span className={styles.inputUnderline}></span>
                    </div>
                    <button>Save</button>
                </form>
            </div>
        </div>
    );
}

export default NewEasing;