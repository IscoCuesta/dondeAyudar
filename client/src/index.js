import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import keys from "./firebaseConfig";
require('dotenv').config()

firebase.initializeApp(
    // keys
    {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINSENDERID,
    appId: process.env.APPID,
    // apiKey: "AIzaSyAhsiKzucDSOqebtNPJUb21Q3BS6XRiO3s",
    // authDomain: "dondeayudar.firebaseapp.com",
    // databaseURL: "https://dondeayudar.firebaseio.com",
    // projectId: "dondeayudar",
    // storageBucket: "dondeayudar.appspot.com",
    // messagingSenderId: "874528403710",
    // appId: "1:874528403710:web:3f8f01ef649e1dbf"
}
);

console.log(process.env.APIKEY = "==================================....")


ReactDOM.render(<App />, document.getElementById("root"));
