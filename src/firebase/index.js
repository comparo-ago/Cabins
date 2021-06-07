import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCoWVwaesJ2xZrKKtNX3-SxCaCHOtMJA4I",
    authDomain: "cabins-a96fa.firebaseapp.com",
    projectId: "cabins-a96fa",
    storageBucket: "cabins-a96fa.appspot.com",
    messagingSenderId: "430999710837",
    appId: "1:430999710837:web:5a7c9981392cfbc078dc3c",
    measurementId: "G-D0FM07GQBR"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;