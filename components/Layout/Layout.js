import styles from './Layout.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { NewEasing, Easing } from '../index.js'

export const Layout = () => {
    const [easings, setEasings] = useState('')

    const addEasing = easingData => setEasings([...easings, easingData])

    const deleteEasing = id => {
        const remainingEasings = easings.filter(easing => id !== easing.id)
        setEasings(remainingEasings)
    }

    const renderEasings = easings && easings.map((easing) => 
        <Easing title={easing.title} cords={easing.cords} id={easing.id} key={easing.id} deleteEasing={deleteEasing} />
    )

    return (
        <div className={styles.container}>
            <h1>Don&apos;t lose your precious <span>easings</span> ever again</h1>
            <div className={styles.image}>
                <Image src='/illustration.svg' alt='Bench and trees' width={478} height={260} />
            </div>
            <NewEasing addEasing={addEasing} />
            {easings && renderEasings}
        </div>
    );
  }