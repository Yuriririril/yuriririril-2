import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBZTuJYeUZ17vMsy10L7Tq4zhJWMRY51vY',
  authDomain: 'yuriririril.firebaseapp.com',
  projectId: 'yuriririril',
  storageBucket: 'yuriririril.appspot.com',
  messagingSenderId: '1026253837825',
  appId: '1:1026253837825:web:afc951779278d31cfa9200',
  measurementId: 'G-P04XY29X1W',
});

const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
