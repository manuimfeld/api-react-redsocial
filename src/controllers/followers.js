const { followModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");

// GET user followers
const userFollowers = async (req, res) => {
  const { id } = req.params; // ID del usuario al que se buscan sus seguidores

  try {
    const data = await followModel.find({ following: { $eq: id.trim() } });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "USER_NOT_FOUND", 404);
  }
};

module.exports = { userFollowers };
