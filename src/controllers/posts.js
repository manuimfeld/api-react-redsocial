const { postsModel } = require("../models");

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getPosts = async (req, res) => {
  const data = await postsModel.find({});
  res.send({ data });
};

/**
 * Obtener una publicacion
 * @param {*} req
 * @param {*} res
 */
const getPost = (req, res) => {};

/**
 * Crear un post
 * @param {*} req
 * @param {*} res
 */
const createPost = async (req, res) => {
  const body = req.body;
  const data = await postsModel.create(body);
  res.send({ data });
};

/**
 * Borrar un post
 * @param {*} req
 * @param {*} res
 */
const deletePost = (req, res) => {};

module.exports = { getPosts, getPost, createPost, deletePost };
