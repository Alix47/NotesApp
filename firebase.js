import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPSXvXuZtqKJen3a6rC02xcXjgghXFD9E",
  authDomain: "react-notes-6c073.firebaseapp.com",
  projectId: "react-notes-6c073",
  storageBucket: "react-notes-6c073.appspot.com",
  messagingSenderId: "412009938554",
  appId: "1:412009938554:web:f3511de356d3d4d64d05c3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db,"notes")
