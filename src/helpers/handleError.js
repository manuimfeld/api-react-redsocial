const handleHttpError = (res, message = "Algo sucedió", code = 403) => {
  res.status(code).json({ message });
};

module.exports = { handleHttpError };
