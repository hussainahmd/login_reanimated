// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw7pytdTRwdrxY_RnF2NKaEMMV_hIasHI",
    authDomain: "test1-8ca74.firebaseapp.com",
    projectId: "test1-8ca74",
    storageBucket: "test1-8ca74.appspot.com",
    messagingSenderId: "1062418255182",
    appId: "1:1062418255182:web:53f041bed578aff70aa21f"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }