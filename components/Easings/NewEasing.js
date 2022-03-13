import Image from 'next/image';
import { useState } from 'react';
import styles from './Easings.module.scss'
import { nanoid } from 'nanoid'

export const NewEasing = (props) => {

    const [title, setTitle] = useState('')
    const [cords, setCords] = useState('')

    const saveEasing = (e) => {
        e.preventDefault()
        if (cords && title) {
            cords = cords.split(' ').map((el) => parseFloat(el))
            props.addEasing({title: title, cords: cords, id: nanoid()})
            setTitle('')
            setCords('')
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={(e) => saveEasing(e)} className={styles.contentWrapper}>
                <div className={styles.titleWrapper}>
                    <input value={title} onChange={(el) => setTitle(el.target.value)} id="easingTitle" type="text" placeholder="First easing" spellCheck='false' autoComplete='off' />
                    <label className={styles.editIcon} htmlFor="easingTitle">
                        <Image src="/edit-icon.svg" width={16} height={16} alt="edit icon" />
                    </label>
                </div>
                <section className={styles.row}>
                    <div className={styles.coordinatesContainer}>
                        <input value={cords} onChange={(el) => setCords(el.target.value)} className={styles.coordinatesInput} placeholder="x1 y1 x2 y2" spellCheck='false' autoComplete='off' />
                        <span className={styles.inputUnderline}></span>
                    </div>
                    <button>Save</button>
                </section>
            </form>
        </div>
    );
}