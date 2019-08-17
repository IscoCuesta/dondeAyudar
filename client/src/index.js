import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";

firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINSENDERID,
    appId: process.env.APPID
});

ReactDOM.render(<App />, document.getElementById("root"));
