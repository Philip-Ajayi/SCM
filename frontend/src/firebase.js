import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB74uNQQ4q3eBoXqCsu_7FqD9tmNck-rx4",
  authDomain: "tscc-4e9ba.firebaseapp.com",
  projectId: "tscc-4e9ba",
  storageBucket: "tscc-4e9ba.appspot.com",
  messagingSenderId: "235453370865",
  appId: "1:235453370865:web:fa85fbe96e63afd6cb3450",
  measurementId: "G-3ZXZVLJ3PE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
