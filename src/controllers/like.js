const { postsModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");
const { db } = require("../models/nosql/posts");

// POST like a post
const likePost = async (req, res) => {
  const user = req.user.username;
  const { id } = req.params;
  try {
    const data = await postsModel.find({ _id: id });

    if (!data[0].usersLiked.includes(user)) {
      // Si el array de usuarios, no incluye el nombre del user actual, like+=1 and likeArr.push username
      return await postsModel.updateOne(
        { _id: id },
        { $inc: { likes: 1 }, $push: { usersLiked: user } }
      );
    } else {
      // Si el array de usuarios, incluye el nombre del user actual, like-=1 and likeArr.remove username
      return await postsModel.updateOne(
        { _id: id },
        {
          $inc: { likes: -1 },
          usersLiked: data[0].usersLiked.filter((filter) => filter !== user),
        }
      );
    }
  } catch (e) {
    handleHttpError(res, "ERROR_LIKE_POST", 404);
  }
};

module.exports = { likePost };
