const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: { type: String},
  email: {type: String, unique: true},
  password: {type: String},
  loggedIn: {type: Boolean, default: false},
  admin: {type: Boolean, default: false},
 
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pictures",
      unique: true
    }
  ],
  createdDate: { type: Date, default: Date.now },
  // timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
