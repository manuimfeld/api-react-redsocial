const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "manuimf") {
      next();
    } else {
      res.status(403);
      res.send({ error: "API KEY NO ES CORRECTA" });
    }
  } catch (e) {
    res.status(403);
    res.send({ error: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER" });
  }
};

module.exports = customHeader;
