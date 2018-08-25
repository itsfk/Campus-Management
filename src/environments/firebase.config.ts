import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyA-BWp7rONWVa-EbGfoSgOlhkNcmiElLN8',
  authDomain: 'campus-management-14101.firebaseapp.com',
  databaseURL: 'https://campus-management-14101.firebaseio.com',
  projectId: 'campus-management-14101',
  storageBucket: 'campus-management-14101.appspot.com',
  messagingSenderId: '844030011057'
};
export const myFirebaseAuthConfig = {
  provider: AngularFireAuth.Password,
  method: AngularFireAuth.Password
};

