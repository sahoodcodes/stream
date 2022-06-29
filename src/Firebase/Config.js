
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require('firebase/auth')





const firebaseConfig = {
  apiKey: "AIzaSyBM9MJzTj0Mc3hxbgKfrTvZA26WAqPcnyc",
  authDomain: "netflix-4c0ed.firebaseapp.com",
  projectId: "netflix-4c0ed",
  storageBucket: "netflix-4c0ed.appspot.com",
  messagingSenderId: "498660699347",
  appId: "1:498660699347:web:40b646f8ff250834ca7826",
  measurementId: "G-TVPMT6HH1S"
};


export default  initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



