import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as firebase from "firebase/app";

var firebaseConfig = null;

console.log(process.env.REACT_APP_FIREBASE_CONFIG)
if (process.env.NODE_ENV === "development") {
    firebaseConfig = require('./firebase-config')
} else if (process.env.NODE_ENV === "production") {
    firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
}
console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
