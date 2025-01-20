import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAsqpN0dmwo4gdlTRISyKoQT8kHMPp573o",
  authDomain: "autopricingsystem.firebaseapp.com",
  projectId: "autopricingsystem",
  storageBucket: "autopricingsystem.firebasestorage.app",
  messagingSenderId: "379059346659",
  appId: "1:379059346659:web:0a68c3fbc07c5c04e5f9d6",
  measurementId: "G-14PFF2849L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
