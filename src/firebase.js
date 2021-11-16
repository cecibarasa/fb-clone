// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// // import firebase from 'firebase/compat/app';
// import "firebase/compat/auth"
// import "firebase/compat/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBzPOZHYxXuWQV0rnSgw8gwoh3OGUwOUiQ",
    authDomain: "facebook-clone-6d2f2.firebaseapp.com",
    projectId: "facebook-clone-6d2f2",
    storageBucket: "facebook-clone-6d2f2.appspot.com",
    messagingSenderId: "85790553435",
    appId: "1:85790553435:web:ffba520f9668dc38d0967e",
    measurementId: "G-RC1H83W3DK"
  };

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