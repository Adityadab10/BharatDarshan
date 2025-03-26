// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl6wsEmCWYzEDqcXbC28XssNLaaghW3cA",
  authDomain: "bharatdarshan-e761d.firebaseapp.com",
  projectId: "bharatdarshan-e761d",
  storageBucket: "bharatdarshan-e761d.firebasestorage.app",
  messagingSenderId: "104642732152",
  appId: "1:104642732152:web:d6480f783c4c7023e6cd8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Google Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };