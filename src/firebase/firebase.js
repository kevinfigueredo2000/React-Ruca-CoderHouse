// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC250FVAHS1EtZ0v8n_wSY-T3vGvmkZIM",
  authDomain: "rucatienda.firebaseapp.com",
  projectId: "rucatienda",
  storageBucket: "rucatienda.appspot.com",
  messagingSenderId: "438570937225",
  appId: "1:438570937225:web:d70a3620d11e8c1ae00f58",
  measurementId: "G-8863X75063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);