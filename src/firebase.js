// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, increment } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMiXmZwG6iPLrW1xeYP5H22YQ4jMsAeUk",
    authDomain: "my-portfolio-858ca.firebaseapp.com",
    projectId: "my-portfolio-858ca",
    storageBucket: "my-portfolio-858ca.firebasestorage.app",
    messagingSenderId: "970749737455",
    appId: "1:970749737455:web:75b823f74055a5774a1e1a",
    measurementId: "G-2HTGELYQKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app);

export { db, doc, getDoc, setDoc, increment };