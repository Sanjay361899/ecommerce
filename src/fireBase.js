import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getFirestore, collection, query, where, getDocs } from "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBubuaObgM-Yf7p4wtBEAmWQmGcvYSKbEc",
    authDomain: "ecommerce-clone-dcd19.firebaseapp.com",
    projectId: "ecommerce-clone-dcd19",
    storageBucket: "ecommerce-clone-dcd19.appspot.com",
    messagingSenderId: "751755479574",
    appId: "1:751755479574:web:def41a07ec29e57f118337",
    measurementId: "G-NL5WF4J0KV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};


