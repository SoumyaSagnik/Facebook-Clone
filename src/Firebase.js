import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu23dUfljY4ra2a6qlpmRFULXtjYr5GD4",
  authDomain: "facebook-clone-93810.firebaseapp.com",
  projectId: "facebook-clone-93810",
  storageBucket: "facebook-clone-93810.appspot.com",
  messagingSenderId: "730483510633",
  appId: "1:730483510633:web:a6a165d4942f84f10b81f8",
  measurementId: "G-H8B10ZTTTF",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
