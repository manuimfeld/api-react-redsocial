const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// Le paso el objeto del usuario (name, password, etc)
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );

  return sign;
};

// Tengo que pasar el token de session JWT
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
