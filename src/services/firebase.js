// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore, memoryLocalCache } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPKfqie0Jyas8fOQ9DGPO29aFrdjQAGUY",
  authDomain: "deltarhosigma-website.firebaseapp.com",
  projectId: "deltarhosigma-website",
  storageBucket: "deltarhosigma-website.firebasestorage.app",
  messagingSenderId: "509967855530",
  appId: "1:509967855530:web:e8b4d934f25d480c4d85d3",
  measurementId: "G-S2VL1EYH6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = initializeFirestore(app, {localCache: memoryLocalCache()});
export const db = firestore;