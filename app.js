const express = require("express");
const loginpage = require("./routes/Login");
const messagePage = require("./routes/Message");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/login", loginpage);
app.use("/", messagePage);
app.listen(3000);
