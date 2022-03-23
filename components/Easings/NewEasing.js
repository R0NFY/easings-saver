import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import styles from './Easings.module.scss'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import { newEasingVariants } from '../../animations/animations'

export const NewEasing = ({addEasing, popup, hidePopup}) => {
    const [title, setTitle] = useState('')
    const [cords, setCords] = useState('')
    const [err, setErr] = useState(false) 
    const [valid, setValid] = useState(false)

    const titleRef = useRef(null)

    const validateRegex = /^(((0(\.\d+)?|1(\.0+)?)|\.(\d+))((\s)|(,\s?))){3}((0(\.\d+)?|1(\.0+)?)|\.(\d+))$/

    const showSuccess = e => {
        setCords(e.target.value)

        let scopedCords = e.target.value
        
        let updatedCords = scopedCords.trim()

        if (validateRegex.test(updatedCords)) {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }

    const saveEasing = (e) => {
        let isValid = false

        let updatedCords

        e.preventDefault()

        if (title && cords) {
            updatedCords = cords.trim()

            if (validateRegex.test(updatedCords)) {
                updatedCords = updatedCords.split(' ')
                isValid = true
            }
            else {
                setErr(true)
            }
        }

        if (isValid) {
            addEasing({title: title.trim(), cords: updatedCords, id: nanoid()})
            setErr(false)
    
            setTitle('')
            setCords('')
        }
    }

    useEffect(() => {
        titleRef.current.focus()
    }, [popup]);

    return (
        <>
        <motion.div className={`${styles.container} ${popup ? styles.popup : ''}`} animate="visible" variants={newEasingVariants} initial="hidden">
            <form onSubmit={(e) => saveEasing(e)} className={styles.contentWrapper}>
                <div className={styles.titleWrapper}>
                    <input ref={titleRef} value={title} onInput={(el) => setTitle(el.target.value)} id="easingTitle" type="text" placeholder="First easing" spellCheck='false' autoComplete='off' />
                </div>
                <section className={styles.row}>
                    <div className={styles.coordinatesContainer}>
                        <input value={cords} onInput={(el) => showSuccess(el)} className={styles.coordinatesInput} placeholder="x1 y1 x2 y2" spellCheck='false' autoComplete='off' />
                        <div className={`${styles.success} ${valid ? styles.show : ''}`}>
                            <Image src="/success-icon.svg" width={20} height={20} alt="success icon" />
                        </div>
                        <span className={styles.inputUnderline}></span>
                    </div>
                    <button type="submit">Save</button>
                </section>
            </form>
        {err && <p className={styles.error}>Looks like we can&apos;t draw with these coordinates yet :(</p>}
        </motion.div>
        <div onClick={() => hidePopup()} className={`${styles.overlay} ${popup ? styles.overlayVisible : ''}`}></div>
        </>
    );
}