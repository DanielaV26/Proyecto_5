// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6WTItqym10XZk_B4g6DdyQdLTNsnLqOI",
    authDomain: "brightbooks-77315.firebaseapp.com",
    projectId: "brightbooks-77315",
    storageBucket: "brightbooks-77315.appspot.com",
    messagingSenderId: "211538509656",
    appId: "1:211538509656:web:402cbdccdb757aa1222f2d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()