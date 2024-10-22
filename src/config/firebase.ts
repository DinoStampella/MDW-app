// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKeEN0j7nBONoGRm9vAIuTrhf2rjC15IY",
  authDomain: "mdw-tn.firebaseapp.com",
  projectId: "mdw-tn",
  storageBucket: "mdw-tn.appspot.com",
  messagingSenderId: "947422907685",
  appId: "1:947422907685:web:87a9b0e0bff6731e849ecc"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)