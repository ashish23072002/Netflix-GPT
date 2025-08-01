// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSENEbB4LyX36f2YIlG-CReaPq1khwsjI",
  authDomain: "netflixgpt-5223d.firebaseapp.com",
  projectId: "netflixgpt-5223d",
  storageBucket: "netflixgpt-5223d.firebasestorage.app",
  messagingSenderId: "40340507175",
  appId: "1:40340507175:web:fff9c0e332468d27079c02",
  measurementId: "G-F1KZYX2ZQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
