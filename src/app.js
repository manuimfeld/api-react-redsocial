require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors());

const port = process.env.PORT || 9000;

// mongodb connection
dbConnect();
app.listen(port, () => console.log("server listening on port", port));
