import {
  setDoc, getDoc, doc,
} from 'firebase/firestore'
import { db } from './firebase'

// const fetchEasings = async () => {
//   const querySnapshot = await getDocs(collection(db, 'easings'))
//   const easingsData = []
//   querySnapshot.forEach((doc) => {
//     easingsData.push(doc.data())
//   })
//   console.log(easingsData)
// }

const updateEasings = async (uid, easings) => {
  await setDoc(doc(db, 'users', uid), {
    easings,
  })
}

const fetchEasings = async (uid) => {
  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  }

  return undefined
}

// eslint-disable-next-line import/prefer-default-export
export { updateEasings, fetchEasings }
