import fb from './fb';
import firebaseConfig from '../firebase.json'
import {
  getFirestore,
  connectFirestoreEmulator,
  addDoc,
  collection,
} from 'firebase/firestore';

const db = getFirestore(fb);

if (typeof window !== 'undefined') {
  if (window.location.hostname === 'localhost') {
    connectFirestoreEmulator(db, 'localhost', firebaseConfig.emulators.firestore.port);
  }
}

// async function test() {
//   try {
//     const docRef = await addDoc(collection(db, 'users'), {
//       first: 'Alan',
//       middle: 'Mathison',
//       last: 'Turing',
//       born: 1912,
//     });

//     console.log('Document written with ID: ', docRef.id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// }

export default db;
