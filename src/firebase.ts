import * as firebase from "firebase/app";
import { getAuth } from 'firebase/auth'

import { getFirestore } from "firebase/firestore"
import 'firebase/auth'
// import 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD9Y-wVUiUksK3ct3-ZTqykh78mYkS2Qo",
  authDomain: "e-commerce-site-77f09.firebaseapp.com",
  projectId: "e-commerce-site-77f09",
  storageBucket: "e-commerce-site-77f09.appspot.com",
  messagingSenderId: "407520375973",
  appId: "1:407520375973:web:c7160c8f170573c7ec494c",
  measurementId: "G-LMC0QWCE0Z"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth();
export { db, auth };
