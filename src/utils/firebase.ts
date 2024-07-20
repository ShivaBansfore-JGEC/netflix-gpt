// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0y_aT3MHc31mdFOihOJ7KnWNZ0lTbkso",
    authDomain: "netflixgpt-9c262.firebaseapp.com",
    projectId: "netflixgpt-9c262",
    storageBucket: "netflixgpt-9c262.appspot.com",
    messagingSenderId: "132607665800",
    appId: "1:132607665800:web:6b94fa045082055c48e13d",
    measurementId: "G-1C05RVL4NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);