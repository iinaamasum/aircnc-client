import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAZTp1EJqzYOLhII3D0YH_O-4q6RSreedU',
  authDomain: 'aircnc-6f622.firebaseapp.com',
  projectId: 'aircnc-6f622',
  storageBucket: 'aircnc-6f622.appspot.com',
  messagingSenderId: '862394276254',
  appId: '1:862394276254:web:f29aebf0c5ba40dd66de8f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
