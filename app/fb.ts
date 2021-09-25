import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqNyxFRsl3N3_BwYdrBzB_-0bQ_7bJAck',
  authDomain: 'jeopardy-8fbae.firebaseapp.com',
  projectId: 'jeopardy-8fbae',
  storageBucket: 'jeopardy-8fbae.appspot.com',
  messagingSenderId: '496271921807',
  appId: '1:496271921807:web:46cc0b2ae6bdd745a616fa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
