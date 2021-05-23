import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx4dVZJO87U6bzqucAEJ2J-hOwoKpwbtk",
  authDomain: "amzn-clone-nextjs.firebaseapp.com",
  projectId: "amzn-clone-nextjs",
  storageBucket: "amzn-clone-nextjs.appspot.com",
  messagingSenderId: "41649688001",
  appId: "1:41649688001:web:3917039cc4a5d61f9ef340",
  measurementId: "G-XESDF6S0W6",
};

let firebaseApp;

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();

export { db };
