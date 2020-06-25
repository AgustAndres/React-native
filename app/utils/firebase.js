import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsmVOmvwctyA1ruoxPSXCPRjL7QbRnPjc",
  authDomain: "tenedores-23611.firebaseapp.com",
  databaseURL: "https://tenedores-23611.firebaseio.com",
  projectId: "tenedores-23611",
  storageBucket: "tenedores-23611.appspot.com",
  messagingSenderId: "813426371333",
  appId: "1:813426371333:web:cd7809bb442b408d79e56c",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
