// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDyKshUluLxrqAJgDs6FQB8l6QA5kQ7D9g",
  authDomain: "facebook--clone-3a4e6.firebaseapp.com",
  projectId: "facebook--clone-3a4e6",
  storageBucket: "facebook--clone-3a4e6.appspot.com",
  messagingSenderId: "959761861508",
  appId: "1:959761861508:web:a94cb4f32f4ae899fcebd1",
  measurementId: "G-FJNKP50C9B"
};
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
// const auth = getAuth(firebaseApp);
// onAuthStateChanged(auth, user => {
//   // Check for user status
// });
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;