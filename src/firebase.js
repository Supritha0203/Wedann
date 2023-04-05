import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJYzCXwpFoo1YE7mKJtCrFKNu5n9aMKr0",
  authDomain: "wedann-b2bb0.firebaseapp.com",
  projectId: "wedann-b2bb0",
  storageBucket: "wedann-b2bb0.appspot.com",
  messagingSenderId: "976314485864",
  appId: "1:976314485864:web:5df290156a7a558590bfdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//storage
export const storage = getStorage(app)

//firestore
export const firestore = getFirestore(app);