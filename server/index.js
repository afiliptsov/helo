require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const session = require("express-session");

const app = express();

const { createUser, loginUser } = require("./controllers/authCtrl");

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .then(console.log("connected"))
  .catch(console.log);

app.use(json());
app.use(cors());

//Testing endpoint
app.get("/api/test", (req, res) => {
  res.status(200).json("Success");
});

//endpoints
//Post endpoints
app.post("/api/createUser", createUser);
app.post("/api/login", loginUser);

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`I am lsitening on port: ${port}`);
});
