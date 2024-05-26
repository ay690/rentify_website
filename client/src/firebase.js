// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentify-bfd8e.firebaseapp.com",
  projectId: "rentify-bfd8e",
  storageBucket: "rentify-bfd8e.appspot.com",
  messagingSenderId: "511540516959",
  appId: "1:511540516959:web:c4872640118cbcd51423ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);