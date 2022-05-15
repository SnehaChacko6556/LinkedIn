// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrkkbZx-HRMEKKJ_1XjV44EBf3G2XlNJM',
  authDomain: 'linkedin-clone-5cef6.firebaseapp.com',
  projectId: 'linkedin-clone-5cef6',
  storageBucket: 'linkedin-clone-5cef6.appspot.com',
  messagingSenderId: '1021985176671',
  appId: '1:1021985176671:web:dcbcec6806791e92dfafea',
  measurementId: 'G-QS2WJLDMDF',
}

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };