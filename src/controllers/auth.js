const { matchedData } = require("express-validator");
const { tokenSign } = require("../helpers/handleJwt");
const { encrypt, compare } = require("../helpers/handlePassword");
const { usersModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");
const { userExist } = require("../helpers/handleUserExist");

// Controlador que registra el usuario
const registerCtrl = async (req, res) => {
  // Checkea si el username o el email ya existe
  const userAlreadyExist = await userExist(req, res);
  if (userAlreadyExist !== false) {
    return handleHttpError(res, userAlreadyExist);
  }

  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

// Controlador que loguea el usuario
const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel
      .findOne({ $or: [{ email: req.email }, { username: req.email }] })
      .select("password username role");

    if (!user) {
      handleHttpError(res, "USER_NOT_FOUND", 404);
      return;
    }

    const hashPassword = user.password;
    const check = await compare(req.password, hashPassword);

    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }

    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      user,
    };
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

module.exports = { registerCtrl, loginCtrl };
