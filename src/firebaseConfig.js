// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8jSY0Rvrp_2zJrDs8T8f93Wx6wCgReVU",
  authDomain: "task-management-1aafd.firebaseapp.com",
  projectId: "task-management-1aafd",
  storageBucket: "task-management-1aafd.appspot.com",
  messagingSenderId: "898135013541",
  appId: "1:898135013541:web:7184bf8026deb62ae2754c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;