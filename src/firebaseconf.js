import firebase from "firebase/app"
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgJZsX60r3Nkjl7a7NTZW7MGdS9hMxOTE",
    authDomain: "pruebas-react-8c0bb.firebaseapp.com",
    projectId: "pruebas-react-8c0bb",
    storageBucket: "pruebas-react-8c0bb.appspot.com",
    messagingSenderId: "351625643487",
    appId: "1:351625643487:web:f2094c27e2e489a3b0f06a"
};
// Initialize Firebase
const fireb = firebase.initializeApp(firebaseConfig)
const store = fireb.firestore()

export {store}