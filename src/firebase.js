import  firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA-0n9YgfIVVHs7JmP7Csw3FxFQjdUfM-k",
  authDomain: "instagram-clone-react-3f4e7.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-3f4e7.firebaseio.com",
  projectId: "instagram-clone-react-3f4e7",
  storageBucket: "instagram-clone-react-3f4e7.appspot.com",
  messagingSenderId: "65994828055",
  appId: "1:65994828055:web:729763bb4b6825015caf52",
  measurementId: "G-7PR5Y8YQGD"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };


 // export default db;