import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBEb6kHyMuanToVANmpp8ELyqXbDQP5BRg',
  authDomain: 'pet-palace-4c65f.firebaseapp.com',
  projectId: 'pet-palace-4c65f',
  storageBucket: 'pet-palace-4c65f.appspot.com',
  messagingSenderId: '582050939183',
  appId: '1:582050939183:web:ed03e6a42ffe844faaa1da',
  measurementId: 'G-FGM43NZ371',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export default firebaseAuth;
