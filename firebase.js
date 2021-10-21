import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyCHVgT_wvWhez_Is2-43ZU78_3xfNAUIwM",
  authDomain: "project-instagram-e9e09.firebaseapp.com",
  projectId: "project-instagram-e9e09",
  storageBucket: "project-instagram-e9e09.appspot.com",
  messagingSenderId: "363355996315",
  appId: "1:363355996315:web:c2ee93e161dcf59bc6063e",
  measurementId: "G-Q67KTD6CV1",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
