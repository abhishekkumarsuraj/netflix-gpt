// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHmMcogPFLyirkFvB2TjB6DTFqqmKDNvo",
  authDomain: "netflixgpt-cb217.firebaseapp.com",
  projectId: "netflixgpt-cb217",
  storageBucket: "netflixgpt-cb217.appspot.com",
  messagingSenderId: "362768794970",
  appId: "1:362768794970:web:714cb5baa641eed8831f63",
  measurementId: "G-3D01ZPK6W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);