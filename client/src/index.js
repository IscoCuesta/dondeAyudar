import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import keys from "./firebase-config.js"

firebase.initializeApp(keys);

ReactDOM.render(<App />, document.getElementById("root"));
