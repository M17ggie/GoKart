// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpSEq03ZQ1R0wVt6qjBvQ5r44vRRG2bac",
  authDomain: "react-project-ee28e.firebaseapp.com",
  databaseURL: "https://react-project-ee28e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-project-ee28e",
  storageBucket: "react-project-ee28e.appspot.com",
  messagingSenderId: "634080309528",
  appId: "1:634080309528:web:73315c47b0c070fd57ae6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);