import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvaXG3O2NSGpwHNfXpvcx9ohbaXwB9H5s",
    authDomain: "fir-cf2d2.firebaseapp.com",
    projectId: "fir-cf2d2",
    storageBucket: "fir-cf2d2.appspot.com",
    messagingSenderId: "407162482242",
    appId: "1:407162482242:web:f357fa3cba48e271b607db",
    measurementId: "G-0R6CRLP636"
  };
export default firebase.initializeApp(firebaseConfig)