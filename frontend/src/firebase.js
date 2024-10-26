import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDGN7KwNNo1ewW3Q6zmiTUkEvUOyrJjek",
  authDomain: "practice-cd823.firebaseapp.com",
  databaseURL: "https://practice-cd823-default-rtdb.firebaseio.com",
  projectId: "practice-cd823",
  storageBucket: "practice-cd823.appspot.com",
  messagingSenderId: "333967088554",
  appId: "1:333967088554:web:eb4403d144dab162bfe9d3",
  measurementId: "G-KCNR2MYCWT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
