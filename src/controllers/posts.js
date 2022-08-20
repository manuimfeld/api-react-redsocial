const { postsModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");
const { matchedData } = require("express-validator");

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getPosts = async (req, res) => {
  try {
    const data = await postsModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_POSTS");
  }
};

/**
 * Obtener una publicacion
 * @param {*} req
 * @param {*} res
 */
const getPost = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await postsModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_POST");
  }
};

/**
 * Crear un post
 * @param {*} req
 * @param {*} res
 */
const createPost = async (req, res) => {
  try {
    const body = matchedData(req); // matchedData elimina campos que están de más (no especificados) en el body POST
    const data = await postsModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_POST");
  }
};

/**
 * Borrar un post
 * @param {*} req
 * @param {*} res
 */
const deletePost = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await postsModel.deleteOne({ _id: id });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_POST");
  }
};

module.exports = { getPosts, getPost, createPost, deletePost };
