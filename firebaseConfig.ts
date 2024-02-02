import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "",
  authDomain: "cat-wiki-407422.firebaseapp.com",
  databaseURL: "https://cat-wiki-407422-default-rtdb.firebaseio.com",
  projectId: "cat-wiki-407422",
  storageBucket: "cat-wiki-407422.appspot.com",
  messagingSenderId: "415557757165",
  appId: "1:415557757165:web:69cce61b604129dd2a44e4",
  measurementId: "G-SDHXQFGYJQ"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);