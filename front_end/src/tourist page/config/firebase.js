import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDsi13Yg7n48Ugo-uRkNucaNroUd0FsBJg",
  authDomain: "history-app-462f7.firebaseapp.com",
  projectId: "history-app-462f7",
  storageBucket: "history-app-462f7.appspot.com",
  messagingSenderId: "95617184457",
  appId: "1:95617184457:web:a9ea589e783c767bea9318",
  measurementId: "G-5P6WLV14F1"
};

const app = initializeApp(firebaseConfig);
export const usersDb=getFirestore(app);
export const auth=getAuth(app);
export const googleAuth=new GoogleAuthProvider(app);
export const storage=getStorage(app);

