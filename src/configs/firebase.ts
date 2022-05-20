import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
//import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_0lJdl_A6BfP65m5zEzUqReDgRGeDmL8",
  authDomain: "workspace-c256d.firebaseapp.com",
  projectId: "workspace-c256d",
  storageBucket: "workspace-c256d.appspot.com",
  messagingSenderId: "963025078592",
  appId: "1:963025078592:web:ccd9a31b9963b35e6692a5"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();

export { db };

