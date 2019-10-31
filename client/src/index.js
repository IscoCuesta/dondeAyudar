import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as firebase from "firebase/app";

if (process.env.NODE_ENV === "production"){
  firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));
}
else {
	firebase.initializeApp({
		apiKey: process.env.REACT_APP_APIKEY,
		authDomain: process.env.REACT_APP_AUTHDOMAIN,
		databaseURL: process.env.REACT_APP_DATABASEURL,
		projectId: process.env.REACT_APP_PROJECTID,
		storageBucket: process.env.REACT_APP_STORAGEBUCKET,
		messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
		appId: process.env.REACT_APP_APPID
	});
}

ReactDOM.render(<App />, document.getElementById("root"));
