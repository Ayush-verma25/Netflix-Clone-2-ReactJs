import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEw6mxRUvy1YJe211we8GYck59Zd8Hpvg",
  authDomain: "netflix-clone-2-c16cc.firebaseapp.com",
  projectId: "netflix-clone-2-c16cc",
  storageBucket: "netflix-clone-2-c16cc.appspot.com",
  messagingSenderId: "59453037345",
  appId: "1:59453037345:web:b1d9f88d8c614b39ba7c60",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
