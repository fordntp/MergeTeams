import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import 'firebase/database';
import { createRoot } from 'react-dom/client';
import { getAuth, onAuthStateChanged } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBArKezZu3iFNLPLZ3RcBBPy0sFqCnZ-Lc",
  authDomain: "mergeteams.firebaseapp.com",
  databaseURL: "https://mergeteams-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mergeteams",
  storageBucket: "mergeteams.appspot.com",
  messagingSenderId: "218618412652",
  appId: "1:218618412652:web:1d638527f3be2a7bd66249",
  measurementId: "G-SX5JC9NLLG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(app)



const root = createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();
