import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2uBlvHqDrVub3d1YBjmBEXRy0aEb7ELM",
    authDomain: "slack-clone-a896c.firebaseapp.com",
    projectId: "slack-clone-a896c",
    storageBucket: "slack-clone-a896c.appspot.com",
    messagingSenderId: "551078418455",
    appId: "1:551078418455:web:23c0e2d88d5c59315ea452",
    measurementId: "G-H56DW0B4QF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider }
export default db;