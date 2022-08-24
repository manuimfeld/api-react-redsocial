const mongoose = require("mongoose");

const FollowScheme = new mongoose.Schema(
  {
    follow: { type: String },
    follower: { type: String },
  },
  {
    timestamps: true, //CREA las columnas createdAt, updatedAt (fecha de creacion y de actualizacion)
    versionKey: false,
  }
);

module.exports = mongoose.model("follow", FollowScheme);
