import styles from './Easings.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { easingDefaultVariants } from '../../animations/animations'

export const Easing = ({title, cords, id, deleteEasing}) => {

    cords = cords.map(el => parseFloat(el))

    const renderedCords = cords.join(', ')

    const ew = 200 // easing width
    const eh = 80 // easing height
    const sw = 6 // stroke width
    const hsw = sw / 2 // half stroke width

    const toPathCords = (cords) => {

        const start = `M ${hsw} ${eh - hsw}`
        
        const end = `${ew - sw} -${eh - sw}`

        const path = `c ${(ew - sw) * cords[0]} -${(eh - sw) * cords[1]}, ${(ew - sw) * cords[2]} -${(eh - sw) * cords[3]}`

        return `${start}, ${path}, ${end}`
    }

    return (
        <motion.div layout animate="visible" initial="hidden" exit="exit" transition={easingDefaultVariants.transition} variants={easingDefaultVariants} id={id} className={styles.easingContainer}>
            <div className={styles.easingContentWrapper}>
                <p>{title}</p>
                <svg width="200" height="80" viewBox="0 0 200 80">
                    <path d={toPathCords(cords)} />
                    <defs>
                        <linearGradient id="easingGradient">
                            <stop offset="0%" stopColor="#84F5C4" />
                            <stop offset="33%" stopColor="#AEB5FB" />
                            <stop offset="67%" stopColor="#E7A5F8" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className={styles.easingBottomSection}>
                    <p>{renderedCords}</p>
                    <Image className={styles.deleteBtn} onClick={() => deleteEasing(id)} src="/delete-icon.svg" width={20} height={20} alt="trash icon" />
                </div>
            </div>
        </motion.div>
    );
}