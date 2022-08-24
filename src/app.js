require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 9000;

/* Acá invoco las rutas */
app.use("/api", require("./routes/index"));

// mongodb connection
dbConnect();
app.listen(
  port,
  /* "192.168.0.70", */ () =>
    console.log("La api está escuchando por el puerto: ", port)
);
