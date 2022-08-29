const { followModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");

// POST Follow user
const followUser = async (req, res) => {
  try {
    const user = req.user.username; // ID del nuevo seguidor
    const { id } = req.params; // ID del usuario a seguir

    if (user === id.trim()) {
      // Si el usuario es la misma persona a la que quiere seguir, return error
      return handleHttpError(res, "ERROR_FOLLOW");
    }

    const body = { follow: id.trim(), follower: user }; // seguir a: id, seguidor: user
    const data = await followModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "USER_NOT_FOUND", 404);
  }
};

// GET user followers
const userFollowers = async (req, res) => {
  const { id } = req.params; // ID del usuario al que se buscan sus seguidores

  try {
    const data = await followModel.find({ follower: { $eq: id.trim() } });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "USER_NOT_FOUND", 404);
  }
};

module.exports = { followUser, userFollowers };
