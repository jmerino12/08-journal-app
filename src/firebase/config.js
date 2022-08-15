import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC-EV4qbUDKVBEYi78fbON9zHkGVlHldHM",
  authDomain: "journalapp-reactjs-699d7.firebaseapp.com",
  projectId: "journalapp-reactjs-699d7",
  storageBucket: "journalapp-reactjs-699d7.appspot.com",
  messagingSenderId: "294981089597",
  appId: "1:294981089597:web:3b64dd0c135a4cfd762d54",
  measurementId: "G-83HBB2JJ2E",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
