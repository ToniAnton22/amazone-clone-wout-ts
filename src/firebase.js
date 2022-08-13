// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {firebase} from "firebase"

export const firebaseConfig = {
    apiKey: "AIzaSyABH-mkpMCPUCq2KHVTpsOGqr7SwZqZ2k0",
    authDomain: "clone-51ddf.firebaseapp.com",
    projectId: "clone-51ddf",
    storageBucket: "clone-51ddf.appspot.com",
    messagingSenderId: "1024733336497",
    appId: "1:1024733336497:web:6edd155ddfc6e7c83d2390",
    measurementId: "G-WZRJ7E90NR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}