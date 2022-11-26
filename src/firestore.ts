import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA-4JfPbE_I_T5YyOjfZC0yJ4XEMVQfEVw",
	authDomain: "blog-bcace.firebaseapp.com",
	projectId: "blog-bcace",
	storageBucket: "blog-bcace.appspot.com",
	messagingSenderId: "1009792566263",
	appId: "1:1009792566263:web:d13fc3fb8e2a1c491324f2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
