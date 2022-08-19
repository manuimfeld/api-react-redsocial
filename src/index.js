const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 9000;

// routes
app.get("/", (req, res) => {
  res.send("funciona la api papá");
});

app.listen(port, () => console.log("server listening on port", port));
