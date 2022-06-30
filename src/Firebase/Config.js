
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require('firebase/auth')





const firebaseConfig = {
  apiKey: "AIzaSyC62aGC_w4nNp3hwY-BGo8OooyekXMuxO4",
  authDomain: "netflix-clone-f2bfa.firebaseapp.com",
  projectId: "netflix-clone-f2bfa",
  storageBucket: "netflix-clone-f2bfa.appspot.com",
  messagingSenderId: "372491083729",
  appId: "1:372491083729:web:e161fb6b44a994f41e4af0",
  measurementId: "G-6WLQ4EDKHP"
};



export default  initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



