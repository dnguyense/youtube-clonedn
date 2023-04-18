// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUHC8WYRhEXQ4AZDErrmWjlKyvWima8dI",
  authDomain: "clone-dn.firebaseapp.com",
  projectId: "clone-dn",
  storageBucket: "clone-dn.appspot.com",
  messagingSenderId: "126230560031",
  appId: "1:126230560031:web:59ffb0fb7ae65653f2c42a",
  measurementId: "G-9PWSFPSQZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);