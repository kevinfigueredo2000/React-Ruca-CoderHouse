import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBC250FVAHS1EtZ0v8n_wSY-T3vGvmkZIM",
  authDomain: "rucatienda.firebaseapp.com",
  projectId: "rucatienda",
  storageBucket: "rucatienda.appspot.com",
  messagingSenderId: "438570937225",
  appId: "1:438570937225:web:d70a3620d11e8c1ae00f58",
  measurementId: "G-8863X75063"
};

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase =()=>app;
  export const getFirestore = ()=>firebase.firestore(app);