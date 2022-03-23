import styles from './Layout.module.scss'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { NewEasing, Easing } from '../index.js'
import { motion } from 'framer-motion'
import { headingVariants, fadeInVariants } from '../../animations/animations'

export const Layout = () => {
    const [easings, setEasings] = useState('')
    const [noEasings, setNoEasings] = useState(false)
    const [showNewEasing, setShowNewEasing] = useState(false)

    const isMounted = useRef(false)

    const addEasing = easingData => {
        easings ? setEasings([...easings, easingData]) : setEasings([easingData])
        setShowNewEasing(false)
    }

    console.log(easings);

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
        } else {
            const localData = localStorage.getItem('easings')

            const localEasings = JSON.parse(localData)

            setEasings(localEasings)
            isMounted.current = true
        }

        if (!easings?.length) {
            setNoEasings(true)
        } else {
            setNoEasings(false)
        }

    }, [easings]);

    const renderEasings = easings && easings.map((easing) => 
        <Easing title={easing.title} cords={easing.cords} id={easing.id} key={easing.id} deleteEasing={deleteEasing} />
    )

    return (
        <div className={styles.container}>
            <motion.h1 className={`${!noEasings ? styles.smallHeading : ''}`} initial="hidden" animate="visible" variants={headingVariants}>Don&apos;t lose your precious <span>easings</span> ever again</motion.h1>
            {noEasings && 
            <motion.div animate="visible" initial="hidden" variants={fadeInVariants} className={styles.image}>
                <Image src='/illustration.svg' alt='Bench and trees' width={478} height={260} />
            </motion.div>
            }
            {!noEasings && 
                <div className={styles.btnWrapper}><button onClick={() => setShowNewEasing(true)} className={styles.addNew}>Add new</button></div>
            }
            {(noEasings | showNewEasing) ? <NewEasing hidePopup={hidePopup} popup={(showNewEasing)} addEasing={addEasing} /> : null}
            {renderEasings}
        </div>
    );
  }