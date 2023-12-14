// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjET-KJcIH1GhcRgPxtt5oYPPvhxK9c8o",
  authDomain: "christmas-46eef.firebaseapp.com",
  projectId: "christmas-46eef",
  storageBucket: "christmas-46eef.appspot.com",
  messagingSenderId: "444823520148",
  appId: "1:444823520148:web:3acf61557477d4b4340581",
  measurementId: "G-1Y822HH52V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseStorage = getStorage(app);
