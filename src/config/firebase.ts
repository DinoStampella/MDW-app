import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKeEN0j7nBONoGRm9vAIuTrhf2rjC15IY",
  authDomain: "mdw-tn.firebaseapp.com",
  projectId: "mdw-tn",
  storageBucket: "mdw-tn.appspot.com",
  messagingSenderId: "947422907685",
  appId: "1:947422907685:web:87a9b0e0bff6731e849ecc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
