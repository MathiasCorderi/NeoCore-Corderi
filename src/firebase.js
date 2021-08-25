import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAV5SvaJLKasM6kTDtDeM0GvgQMGbq3InU",
    authDomain: "neocore-reactjs.firebaseapp.com",
    projectId: "neocore-reactjs",
    storageBucket: "neocore-reactjs.appspot.com",
    messagingSenderId: "789842651692",
    appId: "1:789842651692:web:af460121a198360b8f3f89",
    measurementId: "G-HKEGKM3BVP"
  };

  const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);