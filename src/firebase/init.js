import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBCT3rPA6BGGwHDwpLcr7h0WzVallLnFV0",
  authDomain: "shopping-list-mo.firebaseapp.com",
  databaseURL: "https://shopping-list-mo.firebaseio.com",
  projectId: "shopping-list-mo",
  storageBucket: "shopping-list-mo.appspot.com",
  messagingSenderId: "4806163496",
  appId: "1:4806163496:web:f130b2c84a0f87b3efc91d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Export firestore database
export default firebaseApp.firestore()
