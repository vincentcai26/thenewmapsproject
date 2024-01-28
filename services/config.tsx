import {initializeApp,getApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByjPq12y56uTmcO2noBvmP-MprpQAG3KQ",
  authDomain: "the-new-maps-project.firebaseapp.com",
  projectId: "the-new-maps-project",
  storageBucket: "the-new-maps-project.appspot.com",
  messagingSenderId: "517647964208",
  appId: "1:517647964208:web:e2812264166b8a06b035f5"
};

let firebaseApp;
try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}


const auth = getAuth(firebaseApp);
const pFirestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export {auth,pFirestore,storage}