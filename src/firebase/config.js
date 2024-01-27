// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQixe0Zoi3DFqoOL9feFMd5hNIEY-nRww",
  authDomain: "compu-mercado.firebaseapp.com",
  projectId: "compu-mercado",
  storageBucket: "compu-mercado.appspot.com",
  messagingSenderId: "324741138536",
  appId: "1:324741138536:web:3ebe584d95217ed12993dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);