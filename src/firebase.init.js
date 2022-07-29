// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDurtHifr4N9woiaZM0sEEHlneVz8cQ1xw",
    authDomain: "onito-reciept.firebaseapp.com",
    projectId: "onito-reciept",
    storageBucket: "onito-reciept.appspot.com",
    messagingSenderId: "997387920795",
    appId: "1:997387920795:web:53aa177cdeaadb0958ad3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;