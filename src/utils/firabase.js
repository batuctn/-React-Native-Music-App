import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCDmI6A_25gFE2sX3yA93O0KPXPBmrysVQ',
  authDomain: 'spotify-477c0.firebaseapp.com',
  projectId: 'spotify-477c0',
  storageBucket: 'spotify-477c0.appspot.com',
  messagingSenderId: '696029885081',
  appId: '1:696029885081:web:ab6420c8b9666357b57e08',
  measurementId: 'G-8ZSLZS0KLR',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
