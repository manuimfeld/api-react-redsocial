const { followModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");

// POST Follow user
const followUser = async (req, res) => {
  try {
    const user = req.user.id; // ID del nuevo seguidor
    const { id } = req.params; // ID del usuario a seguir

    if (user === id.trim()) {
      return handleHttpError(res, "ERROR_FOLLOW");
    }

    const body = { follow: id.trim(), follower: user };
    console.log(body);
    const data = await followModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "USER_NOT_FOUND", 404);
  }
};

module.exports = { followUser };
