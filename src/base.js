import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

// Create your app in Firebase and copy/paste the following data
const firebaseApp = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseUrl: ''
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
