import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./style.css"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBrhAEGGy1vzCkC45p34RuHaszEMRg65h4",
  authDomain: "ropa-va-ropa-viene.firebaseapp.com",
  projectId: "ropa-va-ropa-viene",
  storageBucket: "ropa-va-ropa-viene.appspot.com",
  messagingSenderId: "774661790923",
  appId: "1:774661790923:web:44be5b8484a88510870f4e"
};

  
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
