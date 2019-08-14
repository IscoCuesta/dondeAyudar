const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  userFirebaseId: { type: String, required: true },
  organization: {
    type: Schema.Types.ObjectId,
    ref: "Organization"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
