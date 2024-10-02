// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore, memoryLocalCache } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXc42BnT3wmvRMEZKpgJQFlV7ezoElZFU",
  authDomain: "deltarhosigmawebsite.firebaseapp.com",
  projectId: "deltarhosigmawebsite",
  storageBucket: "deltarhosigmawebsite.appspot.com",
  messagingSenderId: "205972159303",
  appId: "1:205972159303:web:6578fa5fa676f6800d6a62",
  measurementId: "G-YRFYV8SN6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = initializeFirestore(app, {localCache: memoryLocalCache()});
export const db = firestore;