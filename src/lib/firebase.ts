import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const fallbackConfig = {
  apiKey: "AIzaSyFallbackPlaceholder",
  authDomain: "chukyza-tours.firebaseapp.com",
  projectId: "chukyza-tours",
  storageBucket: "chukyza-tours.appspot.com",
  messagingSenderId: "000000000",
  appId: "1:000000000:web:000000000"
};

const app = !getApps().length ? initializeApp(fallbackConfig) : getApp();
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);


