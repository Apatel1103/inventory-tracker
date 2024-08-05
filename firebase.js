// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-cjm3Crr2I4IKJ-NaYqtgnH7bjdCcEnI",
  authDomain: "inventory-management-b47c0.firebaseapp.com",
  projectId: "inventory-management-b47c0",
  storageBucket: "inventory-management-b47c0.appspot.com",
  messagingSenderId: "353854081559",
  appId: "1:353854081559:web:042884c16268f0cf19aa52",
  measurementId: "G-P805TE98D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}