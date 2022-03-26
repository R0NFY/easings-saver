import styles from './Layout.module.scss'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { NewEasing, Easing } from '../index.js'
import { motion, AnimatePresence } from 'framer-motion'
import { headingVariants, fadeInVariants } from '../../animations/animations'

export const Layout = () => {
    const [easings, setEasings] = useState('')
    const [noEasings, setNoEasings] = useState(false)
    const [showNewEasing, setShowNewEasing] = useState(false)

    const isMounted = useRef(false)

    const addEasing = easingData => {
        easings ? setEasings([easingData, ...easings, ]) : setEasings([easingData])
        setShowNewEasing(false)
    }

    const deleteEasing = id => {
        const remainingEasings = easings.filter(easing => id !== easing.id)
        setEasings(remainingEasings)
    }

    const hidePopup = () => {
        setShowNewEasing(false)
    }

    useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem('easings', JSON.stringify(easings))
            if (!easings?.length) {
                setNoEasings(true)
            } else {
                setNoEasings(false)
            }
        } else {
            const localData = localStorage.getItem('easings')

            const localEasings = JSON.parse(localData)

            setEasings(localEasings)
            isMounted.current = true
        }

    }, [easings]);

    const renderEasings = easings && easings.map((easing) => 
        <Easing title={easing.title} cords={easing.cords} id={easing.id} key={easing.id} deleteEasing={deleteEasing} />
    )

    return (
        <div className={styles.container}>
            <motion.h1 layout className={`${!noEasings ? styles.smallHeading : ''}`} initial="hidden" animate="visible" transition={headingVariants.transition} variants={headingVariants}>Don&apos;t lose your precious <span>easings</span> ever again</motion.h1>
            <AnimatePresence>
                {noEasings &&
                <motion.div className={styles.image} layout animate="visible" initial="hidden" exit="exit" variants={fadeInVariants}>
                    <Image src='/illustration.svg' alt='Bench and trees' width={478} height={260} />
                </motion.div>
                }
            </AnimatePresence>
            {!noEasings && 
                <motion.div layout className={styles.btnWrapper} animate="visible" initial="hidden" variants={fadeInVariants}><button onClick={() => setShowNewEasing(true)} className={styles.addNew}>Add new</button></motion.div>
            }
            <AnimatePresence>{(noEasings | showNewEasing) ? <NewEasing hidePopup={hidePopup} popup={(showNewEasing)} addEasing={addEasing} /> : null}</AnimatePresence>
            {renderEasings}
        </div>
    );
  }