import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDfWZfsOtitoeVr4alvkW3aFOLad1vBU9Y',
  authDomain: 'chatgpt-clone-16015.firebaseapp.com',
  projectId: 'chatgpt-clone-16015',
  storageBucket: 'chatgpt-clone-16015.appspot.com',
  messagingSenderId: '799543769078',
  appId: '1:799543769078:web:c9e843bfeaa21670a739d7',
};

// Initialize Firebase
// Singleton pattern
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
