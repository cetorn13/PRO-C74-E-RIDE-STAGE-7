import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDyW16UMeb4qQZfr6GMr9bPWl6XGr33FzU",
  authDomain: "pro-c71-a4c65.firebaseapp.com",
  projectId: "pro-c71-a4c65",
  storageBucket: "pro-c71-a4c65.appspot.com",
  messagingSenderId: "874227851756",
  appId: "1:874227851756:web:20a5c66a5d82fb4d6ca0c9"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
