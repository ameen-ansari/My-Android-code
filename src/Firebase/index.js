import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCWsJOqxdI1cdhO6zhjOG2k4SSo6Clpc78",
  authDomain: "finance-c8295.firebaseapp.com",
  projectId: "finance-c8295",
  storageBucket: "finance-c8295.firebasestorage.app",
  messagingSenderId: "338961442983",
  appId: "1:338961442983:web:30d054dd00c25ed1ef9382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);