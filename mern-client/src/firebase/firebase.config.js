// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require("dotenv").config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "mern-book-inventory-26a58",
  storageBucket: "mern-book-inventory-26a58.appspot.com",
  messagingSenderId: "972853126486",
  appId: "1:972853126486:web:b9ddba85228ef86327e2f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
