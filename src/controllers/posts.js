/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getPosts = (req, res) => {
  const data = ["hola", "mundo"];
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
const createPost = (req, res) => {};

/**
 * Borrar un post
 * @param {*} req
 * @param {*} res
 */
const deletePost = (req, res) => {};

module.exports = { getPosts, getPost, createPost, deletePost };
