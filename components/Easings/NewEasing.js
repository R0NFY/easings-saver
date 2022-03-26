import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import styles from './Easings.module.scss'
import { newEasingDefaultVariants, newEasingPopupVariants, overlay } from '../../animations/animations'

function NewEasing({ addEasing, popup, hidePopup }) {
  const [title, setTitle] = useState('')
  const [cords, setCords] = useState('')
  const [err, setErr] = useState(false)
  const [valid, setValid] = useState(false)

  const titleRef = useRef(null)

  const validateRegex = /^(((0(\.\d+)?|1(\.0+)?)|\.(\d+))((\s)|(,\s?))){3}((0(\.\d+)?|1(\.0+)?)|\.(\d+))$/

  const showSuccess = (e) => {
    setCords(e.target.value)

    const scopedCords = e.target.value

    const updatedCords = scopedCords.trim()

    if (validateRegex.test(updatedCords)) {
      setValid(true)
    } else {
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
      } else {
        setErr(true)
      }
    }

    if (isValid) {
      addEasing({ title: title.trim(), cords: updatedCords, id: nanoid() })
      setErr(false)

      setTitle('')
      setCords('')
    }
  }

  useEffect(() => {
    titleRef.current.focus()
  }, [popup])

  return (
    <>
      <motion.div layout className={`${styles.newEasingContainer} ${popup ? styles.popup : ''}`} variants={popup ? newEasingPopupVariants : newEasingDefaultVariants} animate="visible" initial="hidden" exit="exit">
        <form onSubmit={(e) => saveEasing(e)} className={styles.newEasingContentWrapper}>
          <div className={styles.titleWrapper}>
            <input ref={titleRef} value={title} onInput={(el) => setTitle(el.target.value)} id="easingTitle" type="text" placeholder="First easing" spellCheck="false" autoComplete="off" />
          </div>
          <section className={styles.newEasingSection}>
            <div className={styles.coordinatesContainer}>
              <input value={cords} onInput={(el) => showSuccess(el)} className={styles.coordinatesInput} placeholder="x1 y1 x2 y2" spellCheck="false" autoComplete="off" />
              <div className={`${styles.success} ${valid ? styles.show : ''}`}>
                <Image src="/success-icon.svg" width={20} height={20} alt="success icon" />
              </div>
              <span className={styles.inputUnderline} />
            </div>
            <button type="submit">Save</button>
          </section>
        </form>
        {err
            && (
            <p className={styles.error}>
              Looks like we can&apos;t draw with these coordinates yet :(
            </p>
            )}
      </motion.div>
      {popup && <motion.div animate="visible" initial="hidden" exit="exit" variants={overlay} onClick={() => hidePopup()} className={styles.overlay} />}
    </>
  )
}

NewEasing.propTypes = {
  addEasing: PropTypes.func.isRequired,
  popup: PropTypes.bool.isRequired,
  hidePopup: PropTypes.func.isRequired,
}

export default NewEasing
