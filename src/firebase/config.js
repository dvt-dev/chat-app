import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD4drH6-xhFv00vQIC86tQAkpMDiTOL8zg",
  authDomain: "chat-app-69683.firebaseapp.com",
  projectId: "chat-app-69683",
  storageBucket: "chat-app-69683.appspot.com",
  messagingSenderId: "114440326655",
  appId: "1:114440326655:web:2ef487e5a828bcca626bca",
  measurementId: "G-63KQRTKV1X"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db};
export default firebase;