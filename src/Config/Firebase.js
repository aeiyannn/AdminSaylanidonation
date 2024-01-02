import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD2MMvmJx_ltHYuMFq2QCkoueSZ9n0Qs9Y",
  authDomain: "saylani-donation-app.firebaseapp.com",
  projectId: "saylani-donation-app",
  storageBucket: "saylani-donation-app.appspot.com",
  messagingSenderId: "477463690348",
  appId: "1:477463690348:web:e603999be6d1ee90d0ac49",
  measurementId: "G-6KCD7ECE55"

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth1 = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
export { auth1, db, storage }