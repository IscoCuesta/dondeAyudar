const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "http://donde-ayudar.herokuapp.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/dondeayudar");
//mongoose.connect("mongodb+srv://dondeayudar:Zk35sJkmyqetrcGK@cluster0.wruzh.mongodb.net/dondeayudar?retryWrites=true&w=majority");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
