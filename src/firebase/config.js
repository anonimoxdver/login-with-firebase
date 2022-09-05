// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkqEyOx8mPf-vwZMRPV5ilG2ltU2aNRPA",
  authDomain: "twilio-chat-97dcf.firebaseapp.com",
  projectId: "twilio-chat-97dcf",
  storageBucket: "twilio-chat-97dcf.appspot.com",
  messagingSenderId: "984741962674",
  appId: "1:984741962674:web:a88695a79339d2c2677aab"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );