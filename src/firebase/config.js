// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4drH6-xhFv00vQIC86tQAkpMDiTOL8zg",
    authDomain: "chat-app-69683.firebaseapp.com",
    projectId: "chat-app-69683",
    storageBucket: "chat-app-69683.appspot.com",
    messagingSenderId: "114440326655",
    appId: "1:114440326655:web:2ef487e5a828bcca626bca",
    measurementId: "G-63KQRTKV1X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

if (window.location.hostname === "localhostttttttt") {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, "localhost", 8080);
    connectStorageEmulator(storage, "localhost", 9199);
}

export { auth, db, storage };
