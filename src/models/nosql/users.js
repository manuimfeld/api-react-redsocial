const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true, //CREA las columnas createdAt, updatedAt (fecha de creacion y de actualizacion)
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserScheme);
