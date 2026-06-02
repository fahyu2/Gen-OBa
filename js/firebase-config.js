// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCojGV-s1usz0iRIDuBw25pBOKqcDNPrRs",
  authDomain: "ujikom-sialan.firebaseapp.com",
  databaseURL: "https://ujikom-sialan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ujikom-sialan",
  storageBucket: "ujikom-sialan.firebasestorage.app",
  messagingSenderId: "325398434784",
  appId: "1:325398434784:web:e049ea6ba4ecbfb2129185",
  measurementId: "G-QFENYKLC95"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;