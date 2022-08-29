const { followModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");

// GET user followers
const userFollow = async (req, res) => {
  const { id } = req.params; // ID del usuario al que siguen personas

  try {
    const data = await followModel.find({ follow: id }); // Find todos los que sigan a ID
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "USER_NOT_FOUND", 404);
  }
};

module.exports = { userFollow };
