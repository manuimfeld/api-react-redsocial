const bcryptjs = require("bcryptjs");

// Contraseña sin encriptar: prueba123
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
  // Contraseña encriptada: oijrsgj983jrgdgoij
};

// Paso password sin encriptar y contraseña encriptada
const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };
