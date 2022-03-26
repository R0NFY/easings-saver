import Image from 'next/image'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import styles from './Easings.module.scss'
import { easingDefaultVariants } from '../../animations/animations'

function Easing({
  title, propCords, id, deleteEasing,
}) {
  const cords = propCords.map((el) => parseFloat(el))

  const renderedCords = cords.join(', ')

  const ew = 200 // easing width
  const eh = 80 // easing height
  const sw = 6 // stroke width
  const hsw = sw / 2 // half stroke width

  const toPathCords = (argsCords) => {
    const start = `M ${hsw} ${eh - hsw}`

    const end = `${ew - sw} -${eh - sw}`

    const path = `c ${(ew - sw) * argsCords[0]} -${(eh - sw) * argsCords[1]}, ${(ew - sw) * argsCords[2]} -${(eh - sw) * argsCords[3]}`

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
  )
}

Easing.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line max-len
  propCords: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  deleteEasing: PropTypes.func.isRequired,
}

export default Easing
