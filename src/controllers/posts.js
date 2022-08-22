const { postsModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");
const { matchedData } = require("express-validator");

// Get Posts
const getPosts = async (req, res) => {
  try {
    const data = await postsModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_POSTS");
  }
};

// Get Post
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

// Get Posts by a user
const getPostUser = async (req, res) => {
  try {
    const { id } = req.params; // params es lo que contiene la url despues de la ruta original ejemplo: api/posts/user/{id}
    const data = await postsModel.find({ postedByUser: { $eq: id } }); // busco todos los posts que tengan el mismo postedByUser
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_USER_ID_NOT_FOUND", 404);
  }
};

// POST create Post
const createPost = async (req, res) => {
  try {
    /*  const user = req.user; // qué user es el que está haciendo esta peticion */
    /*  const body = matchedData(req); matchedData elimina campos que están de más (no especificados) en el body POST */
    /*  const data = await postsModel.create(body); */
    const body = { content: req.body.content, postedByUser: req.user.username };
    const data = await postsModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_POST");
  }
};

// DELETE delete Post
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

module.exports = { getPosts, getPost, getPostUser, createPost, deletePost };
