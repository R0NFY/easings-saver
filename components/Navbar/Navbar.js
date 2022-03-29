import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut,
} from 'firebase/auth'
import { auth } from '../../utils/firebase'
import styles from './NavBar.module.scss'
import { fadeInVariants } from '../../animations/animations'

function NavBar() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userName, setUserName] = useState('')

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsSignedIn(true)
      return setUserName(user.displayName)
    }
    return setIsSignedIn(false)
  })

  const signInWithFireBase = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
  }

  const signOutWithFirebase = () => {
    signOut(auth)
  }

  if (!isSignedIn) {
    return (
      <motion.div className={styles.container} animate="visible" initial="hidden" variants={fadeInVariants}>
        <button onClick={signInWithFireBase} className={styles.google} type="button">
          <Image src="/google_logo.svg" alt="google logo" height={14} width={14} />
          <p>Sign up with Google</p>
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div className={styles.container} animate="visible" initial="hidden" variants={fadeInVariants}>
      <p className={styles.userName}>{userName}</p>
      <button onClick={signOutWithFirebase} className={styles.signOut} type="button">Sign Out</button>
    </motion.div>
  )
}

export default NavBar
