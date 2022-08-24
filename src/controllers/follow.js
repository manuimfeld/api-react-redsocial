const { followModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");

// POST Follow user
const followUser = async (req, res) => {
  try {
    const user = req.user._id; // ID del nuevo seguidor
    const { id } = req.params; // ID del usuario a seguir

    const body = { following: id.trim(), followers: user };
    const data = await followModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "USER_NOT_FOUND", 404);
  }
};

module.exports = { followUser };
