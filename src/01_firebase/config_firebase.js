// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZTO0L0hvi91bUS4dDuFoaC22NZsV7mcc",
  authDomain: "cpre329expedia.firebaseapp.com",
  projectId: "cpre329expedia",
  storageBucket: "cpre329expedia.firebasestorage.app",
  messagingSenderId: "202662366267",
  appId: "1:202662366267:web:bc984281aaca551ac3e01e"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

export default firebase_app