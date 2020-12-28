import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBf_HO3ZnBNTT9Fm0zNDnoR7Z7VyyvOrDA",
    authDomain: "facebook-clone-27119.firebaseapp.com",
    projectId: "facebook-clone-27119",
    storageBucket: "facebook-clone-27119.appspot.com",
    messagingSenderId: "411882529420",
    appId: "1:411882529420:web:4877fe12d979459a01d1a9",
    measurementId: "G-EC4D1PSP2Z"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { db , storage, auth, provider } 