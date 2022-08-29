const mongoose = require("mongoose");

const PostsScheme = new mongoose.Schema(
  {
    content: { type: String },
    postedByUser: { type: String },
    likes: { type: Number, default: 0 },
    usersLiked: [],
  },
  {
    timestamps: true, //CREA las columnas createdAt, updatedAt (fecha de creacion y de actualizacion)
    versionKey: false,
  }
);

module.exports = mongoose.model("posts", PostsScheme);
