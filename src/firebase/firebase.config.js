// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZN6jHFel4vfBy_RO28awxIKR1uR-9I2g',
  authDomain: 'auth-onwards.firebaseapp.com',
  projectId: 'auth-onwards',
  storageBucket: 'auth-onwards.appspot.com',
  messagingSenderId: '38742099808',
  appId: '1:38742099808:web:a0e1a4562492924a184005',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
