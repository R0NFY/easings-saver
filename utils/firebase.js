import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDf-wp38Ua0Tt_sAwYsapAHXGWrJ7UP2xI',
  authDomain: 'easing-functions-saver.firebaseapp.com',
  projectId: 'easing-functions-saver',
  storageBucket: 'easing-functions-saver.appspot.com',
  messagingSenderId: '954801915981',
  appId: '1:954801915981:web:5291172386706675357404',
}

const app = initializeApp(config)

const db = getFirestore(app)

export const auth = getAuth(app)

// eslint-disable-next-line import/prefer-default-export
export { db }
