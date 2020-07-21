import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8n7aCN8FtBYkgUGhubXYqo1z3GxT7ui0",
    authDomain: "volleyball-share.firebaseapp.com",
    databaseURL: "https://volleyball-share.firebaseio.com",
    projectId: "volleyball-share",
    storageBucket: "volleyball-share.appspot.com",
    messagingSenderId: "297716434036",
    appId: "1:297716434036:web:75f0e3f9e68870389a3d21",
    measurementId: "G-KR8WWMMQTD"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings( { timestampsInSnapshots: true } );

  export default firebase;