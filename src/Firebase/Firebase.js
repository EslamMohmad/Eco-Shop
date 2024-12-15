// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgrEzzAIfhoxOQV9BhIM7B6lABIyCFbOA",
  authDomain: "ecoshop-79a80.firebaseapp.com",
  projectId: "ecoshop-79a80",
  database: "https://ecoshop-79a80-default-rtdb.firebaseio.com",
  storageBucket: "ecoshop-79a80.appspot.com",
  messagingSenderId: "1002201941207",
  appId: "1:1002201941207:web:902817132df3a7a39c1c92",
  measurementId: "G-269FMY89JL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getDatabase(app);
