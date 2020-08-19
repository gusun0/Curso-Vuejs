import * as firebase from "firebase/app";
import "firebase/firestore";

// Agregar configuración firebase:
var firebaseConfig = {
    apiKey: "AIzaSyAb_6UR6FXdG-bKoCNps-NInM0uKNtPF3c",
    authDomain: "todo-win-fafbb.firebaseapp.com",
    databaseURL: "https://todo-win-fafbb.firebaseio.com",
    projectId: "todo-win-fafbb",
    storageBucket: "todo-win-fafbb.appspot.com",
    messagingSenderId: "412987896820",
    appId: "1:412987896820:web:9189cf9ce6483449a1ffa1"

};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };
